const express = require("express");
const jwt = require("jsonwebtoken");
const { loginController, logoutController, registerController, getAllUsers, getUserById, updateUser } = require("../controllers/user");
const { isLoggedIn } = require("../middlewares/auth")
const router = express.Router();

router.post("/register" , registerController)
router.post("/login" , loginController)
router.get("/logout" , logoutController)
router.get("/allusers" , getAllUsers)
router.get("/getuserbyid" , isLoggedIn, getUserById)
router.put("/update" , isLoggedIn, updateUser)

module.exports = router