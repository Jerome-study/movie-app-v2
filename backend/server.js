const express = require("express");
const session = require("express-session");
const passport = require('passport');
const MongoStore = require('connect-mongo');
const authRouter = require("./routes/auth");
const protectedRouter = require("./routes/protected");
const { verify } = require("./middleware//verify");
const app = express();

// ENV variables
require("dotenv").config();
// Database Config
require("./config/database");

// passport
require("./config/passport");


app.use(express.json());

const cookieConfig = {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    sameSite: "lax",
    httpOnly: true
}

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: "session"
    }),
    cookie: cookieConfig
}));



app.use(passport.initialize());
app.use(passport.session());



// Routes
app.use("/auth",authRouter);
app.use("/api", verify, protectedRouter);



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})