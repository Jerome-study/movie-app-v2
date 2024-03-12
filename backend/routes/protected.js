const express = require("express");
const { userModel } = require("../models/userSchema");
const { movieModel } = require("../models/movieSchema");
const { middleWareApiPrivate } = require("../middleware/api");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/getUser", (req,res) => {
    res.send({username: req.user.username, avatar: req.user.avatar, id: req.user.id})
})

router.get("/isLoggedIn", (req,res) => {
    res.send({ message: "true"})
})
    
router.get("/getAll", (req,res) => {
    res.send(req.user);
})

router.post("/editInfo", async (req,res) => {
    try {
        const { username, first_name, last_name, nickname, bio, avatar } = req.body;
        const user = await userModel.findById(req.user.id).select('-password');
        const sameUser = await userModel.findOne({ username, _id: { $ne: req.user.id } }).select('-password');
        
        if (sameUser) {
            return res.status(303).send({ message: "This Username already exist" })
        }
        user.username = user.username === username? user.username: username
        user.first_name = user.first_name === first_name? user.first_name: first_name
        user.last_name = user.last_name === last_name? user.last_name: last_name
        user.bio = user.bio === bio? user.bio: bio
        user.nickname = user.nickname === nickname? user.nickname: nickname
        user.avatar = user.avatar === avatar? user.avatar: avatar

        await user.save();

        res.status(200).send({ message: "Updated"})

    } catch(error) {
        console.log( error.message.split(":")[2])
        res.status(300).send({ error: error.message.split(":")[2]})
    }
})


// Watch List

router.post("/addWatch", async (req,res) => {{
    const { id, name, category, poster_path } = req.body;
    const data = {
        id,
        name,
        category,
        poster_path,
    }

    try {
        const user = await userModel.findById(req.user.id);
        const movieExist = await user.watch_list.find(movie => movie.data.id === id)
        
        if (movieExist) {
            return res.sendStatus(303)
        }

        await user.watch_list.push({
            data,
            isChecked: false,
            id
        });

        await user.save();
        res.send({ message: "Added To Watch List"})
    } catch(error) {
        console.log(error.message);
    }
}});


router.get("/ifMovieExist/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(req.user.id);
        const movieExist = await user.watch_list.find(movie => movie.data.id === Number(id));
        res.send({message: movieExist});

    } catch(error) {
        console.log(error.message);
    }
});

router.delete("/removeWatch/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findOneAndUpdate({ _id: req.user.id }, { $pull: {
            watch_list: {
                id: Number(id)
            }
        }}).select('id').select('watch_list');
        
        if (!user) {
            console.log("d")
            return res.sendStatus(303);
        }
        res.send({ message: user.watch_list.length - 1})
    } catch(error) {
        console.log(error.message);
    }
});


router.get("/getWatchList", async (req,res) => {
    try {
        const user = await userModel.findById(req.user.id).select('-password');
        res.send(user.watch_list)
    } catch(error) {
        console.log(error.message);
    }
})

router.get("/ifMovieChecked/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findOne({ _id: req.user.id }, {'watch_list': {
            $elemMatch: { id: Number(id)}
        }} )

        if (!user.watch_list.length) {
            return res.sendStatus(303);
        }
        res.send(user.watch_list[0].isChecked);
    } catch(error) {
        console.log(error.message);
    }
})

router.post("/checkMovie/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { checked } = req.body
        const newQuery = {
            $set: {
                'watch_list.$.isChecked': checked? false : true
            }
        }
        const user = await userModel.findOneAndUpdate({ _id: req.user.id  , 'watch_list.id': Number(id) }, newQuery).select('watch_list')
        if (!user) {
            return res.status(400).send({ message: "No user found"});
        }
        res.send({ message: "Checked" })
    } catch(error) {
        console.log(error.message);
        return res.sendStatus(400);
    }
});

// Like

router.post("/likeMovie/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const newQuery = {
            $inc: {
                'data.$.likes': 1
            },
            $push: {
                'data.$.likedBy': {
                    username: req.user.username,
                    id: req.user.id,
                    avatar: req.user.avatar
                }
            }
        }
        const movieInfos = await movieModel.findOneAndUpdate({ title: "movieInfos", 'data.id' : id }, newQuery)
        res.send({ message: "liked"})
    } catch(error) {
        console.log(error.message);
    }
})


router.post("/removeLike/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const newQuery = {
            $inc: {
                'data.$.likes': -1
            },
            $pull: {
                'data.$.likedBy': {
                    id: req.user.id
                }
            }
        }
        const movieInfos = await movieModel.findOneAndUpdate({ title: "movieInfos", 'data.id' : id }, newQuery)
        res.send({ message: "removed"})
        
    } catch(error) {
        console.log(error.message);
    }
});


router.get("/movieInfo/:id", middleWareApiPrivate, async (req,res) => {
    try {
        const { id } = req.params;
        const movie = await movieModel.findOne({ title: "movieInfos"});
        const found = await movie.data.find(film => film.id === Number(id));
        if (!found) {
            const randomNum = Math.floor(Math.random() * 20000)
            movie.data.push({
                id : id,
                likes: randomNum
            })
            await movie.save();
            return res.send({ likes: randomNum, comments: [],  message: "first view" });
        };
        const isLiked = await found.likedBy.find(person => person.id == req?.user?.id);
        res.send({ likes: found.likes, isLiked, comments: found.comments })
    } catch(error) {
        console.log(error.message + 'protected')
    }
});


router.post("/postComment/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        const newQuery = {
            $push: {
                'data.$.comments': {
                    comment: comment,
                    id: req.user.id
                }
            },
        }

        const movieInfos = await movieModel.findOneAndUpdate({ title: "movieInfos", 'data.id': id }, newQuery, {upsert:true, new: true, runValidators: true, timeStamps: true});
        const movie = await movieModel.findOne({ title: "movieInfos"});
        const found = await movie.data.find(film => film.id === Number(id));
        res.send({ comments: found.comments });
    } catch(error) {
        console.log(error.message + " comment error  ")
    }
});

router.post("/editComment/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { editComment, comment_id } = req.body;
        const newQuery = {
          $set: {
            "data.$.comments.$[element].comment" : editComment
          }
        }
        const movieInfos = await movieModel.findOneAndUpdate({ title: "movieInfos", 'data.id' : id}, newQuery, {
            timeStamps: true,
            upsert: true,
            new: true,
            arrayFilters: [{ 'element._id' : comment_id}]
        });
        const movie = await movieModel.findOne({ title: "movieInfos"});
        const found = await movie.data.find(film => film.id === Number(id));
        res.send({ comments: found.comments });

    } catch(error) {
        console.log(error.message + " comment edit error ");
    }
});

router.get("/getCommentInfo/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id).select("avatar").select("username")
        if (!user) {
            return res.sendStatus(404);
        }
        res.send({ info: user})
    } catch(error) {
        console.log(error.message + "get comment info error");
    }
});

router.post("/deleteComment", async (req,res) => {
    try {
        const { comment_id, movie_id } = req.body
        const newQuery = {
            $pull : {
                'data.$.comments' : {
                    _id: comment_id
                } 
            }
        }
        const movieInfos = await movieModel.findOneAndUpdate({ title: "movieInfos", 'data.id' : movie_id }, newQuery);
        const movie = await movieModel.findOne({ title: "movieInfos"});
        const found = await movie.data.find(film => film.id === Number(movie_id));
        res.send({ comments: found.comments });
    } catch(error) {
        console.log(error.message + "get comment info error");
    }
});


module.exports = router;