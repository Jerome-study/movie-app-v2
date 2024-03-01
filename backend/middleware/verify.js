


const verify = (req,res,next) => {
    if (!req.user) {
        return res.sendStatus(204);
    }
    next();
}

const verifyAuth = (req,res,next) => {
    if (!req.user) {
        return next();
    }
    res.send({ message: "You are already authenticated" });
}


module.exports = { verify, verifyAuth };