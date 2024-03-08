const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        maxLength: [20, "Nickname should not be exceeded above 20"],
        default: ""
    },
    bio: {
        type: String,
        maxLength: [75, "Bio should not be exceeded above 75"],
        default: ""
    },
    password: {
        type: String,
        required: true
    },
    likes: {
        type: [],
    },
    watch_list: {
        type: []
    },
    avatar: {
        type: String,
        required: true
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

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

const movieSchema = new mongoose.Schema({
    likes: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true,
    },
    likedBy: [likeBySchema]

}, { _id: false });

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


const userModel = mongoose.model.users || mongoose.model("users", userSchema);
const movieModel = mongoose.model.moviesInfos || mongoose.model("moviesInfos", movieInfoSchema);

module.exports = { userModel, movieModel };