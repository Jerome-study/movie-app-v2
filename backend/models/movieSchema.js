const mongoose = require("mongoose");

const likeBySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    }
}, { _id: false})


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
     
    id: {
        type: String,
        required: true,
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})


const movieSchema = new mongoose.Schema({
    likes: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true,
    },

    comments: {
        type: [commentSchema]
    },

    likedBy: [likeBySchema]

}, { _id: false, timestamps: true });


const movieInfoSchema = new mongoose.Schema({
    data: {
        type: [movieSchema],
        default: []
    },

    title: {
        type: String,
        default: "movieInfos"
    }
})


const movieModel = mongoose.model.moviesInfos || mongoose.model("moviesInfos", movieInfoSchema);

module.exports = { movieModel };