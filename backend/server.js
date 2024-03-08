const express = require("express");
const session = require("express-session");
const passport = require('passport');
const MongoStore = require('connect-mongo');
const authRouter = require("./routes/auth");
const protectedRouter = require("./routes/protected");
const publicRouter = require("./routes/public");
const cors = require("cors");
const { verify } = require("./middleware//verify");
const app = express();



// ENV variables
require("dotenv").config();


// Database Config
require("./config/database");


// passport
require("./config/passport");

app.use(cors({
    origin: process.env.ORIGINURL,
    credentials: true
}));


app.use(express.json());

const cookieConfig = {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    sameSite: "none",
    httpOnly: true
}

if (process.env.NODE_ENV == "production") {
    cookieConfig.secure = true
    cookieConfig.sameSite = "none"
}


app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: "session"
    }),
    cookie: cookieConfig,
    proxy: true
}));



app.use(passport.initialize());
app.use(passport.session());



// Routes
app.use("/auth",authRouter);
app.use("/api", verify, protectedRouter);
app.use("/public/api", publicRouter )


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})