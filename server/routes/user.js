const express = require("express");
const jwt = require("jsonwebtoken");
const { loginController, logoutController, registerController, getAllUsers } = require("../controllers/user");
const UserModel = require("../models/user");
const router = express.Router();

router.post("/register" , registerController)
router.post("/login" , loginController)
router.get("/logout" , logoutController)
router.get("/allusers" , getAllUsers)

module.exports = router