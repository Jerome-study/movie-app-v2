const express = require("express");
const { movieModel } = require("../models/userSchema");
const router = express.Router();
const { middleWareApi } = require("../middleware/api");


router.get("/getLikes/:id", middleWareApi, async (req,res) => {
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
            return res.send({ message: randomNum });
        };
        const isLiked = await found.likedBy.find(person => person.id == req?.user?.id);
        res.send({ message: found.likes, isLiked })
    } catch(error) {
        console.log(error.message)
    }
});


module.exports = router;