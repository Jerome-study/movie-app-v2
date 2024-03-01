const express = require("express");
const router = express.Router();
const { handleLoginController } = require("../controller/loginController");
const { handleRegisterController } = require("../controller/registerController");
const { handleLogoutController } = require("../controller/logoutController");
const { verify, verifyAuth } = require("../middleware/verify");

router.post("/login", verifyAuth, handleLoginController);
router.post("/register", verifyAuth, handleRegisterController);
router.post("/logout", verify, handleLogoutController);



module.exports = router;