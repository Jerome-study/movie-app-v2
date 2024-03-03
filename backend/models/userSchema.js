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
    favorites: {
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



const userModel = mongoose.model.users || mongoose.model("users", userSchema);

module.exports = { userModel };