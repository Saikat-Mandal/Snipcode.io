const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const { postAnswerController } = require("../controllers/answers");
const { isLoggedIn } = require("../middlewares/auth");
const router = express.Router();


router.post("/postanswer" ,  isLoggedIn,postAnswerController)


module.exports = router