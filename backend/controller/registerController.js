const { userModel } = require("../models/userSchema");
const bcrypt = require("bcryptjs");

async function handleRegisterController(req,res) {
    const { username , password, confirmPassword } = req.body;
    if (!username || !password) return res.json({ message: "Please fill all the fields" });
    if (password !== confirmPassword) return res.json({ message: "Password do not match!" });
    try {
        const foundUser = await userModel.findOne({ username });
        // If user found
        if (foundUser) return res.status(303).json({ message: "User exist"});

        // If user not found
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await userModel.create({
            username,
            password: hashedPassword
        });
        res.status(201).json({ message: "User is created" })
    } catch(error) {
        console.log(error.message);
    }
}

module.exports = { handleRegisterController };