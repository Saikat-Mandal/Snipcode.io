const express = require("express")
const { getAllQuestionsController, createNewQuestion, getUserQuestionsController, getQuestionById, updateUpvote, updateDownvote } = require("../controllers/questions")
const { isLoggedIn } = require("../middlewares/auth")
const router = express.Router()

router.get("/allquestions" , getAllQuestionsController)
router.get("/userquestions" , getUserQuestionsController)
router.get("/getquestionbyid" , getQuestionById)
router.post("/askquestion" ,isLoggedIn , createNewQuestion)
router.put("/updateupvote" ,isLoggedIn , updateUpvote)
router.put("/updatedownvote" ,isLoggedIn , updateDownvote)

module.exports = router