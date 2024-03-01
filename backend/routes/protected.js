const express = require("express");
const { userModel } = require("../models/userSchema");
const router = express.Router();


router.get("/getUser", (req,res) => {
    res.send(req.user.username)
})

router.get("/isLoggedIn", (req,res) => {
    res.send({ message: "true"})
})
    

module.exports = router;