const { movieModel } = require("../models/movieSchema");



const middleWareApi = async (req,res, next) => {
    try {
        const movie = await movieModel.findOne({ title: "movieInfos"});
        if (!movie) {
            await movieModel.create({});
            return next();
        }
       
        const { id } = req.params;
        const found = await movie.data.find(film => film.id === Number(id));
        if (found) {
            return res.send({ likes: found.likes, comments: found.comments });
        }
        next();

    } catch(error) {
        console.log(error.message + 'public middleware')
    }
};


const middleWareApiPrivate = async (req,res, next) => {
    try {
        const movie = await movieModel.findOne({ title: "movieInfos"});
        if (!movie) {
            await movieModel.create({});
            return next();
        }
       
        const { id } = req.params;
        const found = await movie.data.find(film => film.id === Number(id));
        if (found) {
            const isLiked = await found.likedBy.find(person => person.id == req?.user?.id);
            return res.send({ likes: found.likes, comments: found.comments, isLiked });
        }
        next();

    } catch(error) {
        console.log(error.message + 'private middleware')
    }
};

module.exports = { middleWareApi, middleWareApiPrivate }