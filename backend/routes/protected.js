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
        const { username, first_name, last_name, nickname, bio } = req.body;
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

        await user.save();

        res.status(200).send({ message: "Updated"})

    } catch(error) {
        console.log( error.message.split(":")[2])
        res.status(300).send({ error: error.message.split(":")[2]})
    }
})

module.exports = router;