const express = require("express");
const { movieModel } = require("../models/movieSchema");
const router = express.Router();
const { middleWareApi } = require("../middleware/api");


router.get("/movieInfo/:id", middleWareApi, async (req,res) => {
    try {
        
        const { id } = req.params;
        const movie = await movieModel.findOne({ title: "movieInfos"});
        const found = await movie.data.find(film => film.id === Number(id));

        if (!found) {
            const randomNum = Math.floor(Math.random() * 20000);
            movie.data.push({
                id : id,
                likes: randomNum
            })
            await movie.save();
            return res.send({ likes: randomNum, comments: [], message: "public first view" });
        };
        res.send({ likes: found.likes, comments: found.comments, message:"public" })
        
    } catch(error) {
        console.log(error.message + "public")
    }
});




module.exports = router;