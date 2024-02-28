
const handleLogoutController = async (req,res) => {
    res.clearCookie('connect.sid'); 
    req.logOut((err) => {
        if (err) return res.send({ message: err.message});
        req.session.destroy();
        res.send({ message: "Logout"})
    });
}

module.exports = { handleLogoutController };