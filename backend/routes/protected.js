const express = require("express");
const { userModel } = require("../models/userSchema");
const router = express.Router();


router.get("/getUser", (req,res) => {
    res.send({username: req.user.username, avatar: req.user.avatar})
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
            isChecked: false
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
        const user = await userModel.findById(req.user.id);
        const filteredWatchList = await user.watch_list.filter(movie => movie.data.id !== Number(id))
        user.watch_list = filteredWatchList;
        await user.save();
        res.send({ message: "Remove From Watch List"})

    } catch(error) {
        console.log(error.message);
    }
})

module.exports = router;