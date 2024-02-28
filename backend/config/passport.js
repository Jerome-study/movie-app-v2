const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const { userModel } = require("../models/userSchema");
const bcrypt = require("bcryptjs");

passport.serializeUser(async (user,done) => {
    try {
        const found = await userModel.findById(user.id);
        if (!found) throw new Error("User not found");
        done(null, found.id)
    } catch(error) {
        done(error)
    }

});

passport.deserializeUser( async (id,done) => {
    try {
        const user = await userModel.findById(id);
        if (!user) throw new Error("User not found");
        done(null, user.id)
    } catch (error) {
        done(error)
    }
});

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
}, async (username, password, done) => {
    if (!username || !password)  return done(null, false, {  message: "Please fill all the fields!"})
    try {
        const user = await userModel.findOne({ username });
        
        if (!user) return done(null, false, { message: "User not found"});
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (user.username !== username || !isPasswordMatched) return done(null, false, { message: "Password or Email is incorrect!"});
        return done(null, user)

    } catch(error) {
        console.log(error.message)
        return done(null, false, { message: "Something went wrong!"})
    }
}));
