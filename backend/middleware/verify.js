


const verify = (req,res,next) => {
    console.log(req.user);
    if (!req.user) {
        return res.sendStatus(401);
    }
    next();
}

const verifyAuth = (req,res,next) => {
    console.log(req.user);
    if (!req.user) {
        return next();
    }
    res.send({ message: "You are already authenticated" });
}


module.exports = { verify, verifyAuth };