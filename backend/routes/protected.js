const express = require("express");
const { userModel } = require("../models/userSchema");
const router = express.Router();


router.get("/getUser", (req,res) => {
    res.send({username: req.user.username})
})

router.get("/isLoggedIn", (req,res) => {
    res.send({ message: "true"})
})
    
router.get("/getAll", (req,res) => {
    res.send(req.user);
})

module.exports = router;