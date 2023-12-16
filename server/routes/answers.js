const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const { postAnswerController, makeAnswerCorrect, updateUpvote, updateDownvote } = require("../controllers/answers");
const { isLoggedIn } = require("../middlewares/auth");
const router = express.Router();


router.post("/postanswer" ,  isLoggedIn,postAnswerController)
router.put("/makeanswercorrect" ,  isLoggedIn,makeAnswerCorrect)
router.put("/answerupvote" ,  isLoggedIn,updateUpvote)
router.put("/answerdownvote" ,  isLoggedIn,updateDownvote)


module.exports = router