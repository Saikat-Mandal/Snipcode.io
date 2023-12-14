const QuestionModel = require("../models/Question")
const UserModel = require("../models/user")


// get all the questions 
exports.getAllQuestionsController = async(req,res)=>{
    try {
        const questions = await QuestionModel.find({})
        return res.status(200).json(questions)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

// get questions for a specific user 
exports.getUserQuestionsController = async(req , res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}
// post a new question for a specific user 
exports.createNewQuestion = async(req , res)=>{
    try {
        const {title , body} = req.body
        const id = req.token.id

        const newQuestion = {
            title : title,
            body:body,
            tags:[],
            userId:id,
            answers:[],
            comments:[]
        }

        const createQuestion = await QuestionModel.create(newQuestion)

        res.send({message:"New question created !" , createQuestion})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

// get question by id 
exports.getQuestionById = async(req,res)=>{
    try {
        const questionId = req.query.q
        const question = await QuestionModel.findById(questionId)
        res.status(200).json(question)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

exports.updateUpvote = async(req,res)=>{
    try {
        const {id} = req.body
        const question = await QuestionModel.findById(id)
        await QuestionModel.updateOne({_id:id} , { $set: { upvotes: question.upvotes+1 }})
        res.status(200).json({message :"Added upvote"})
    } catch (error) {
        res.status(500).json({message:"Internal server error" , error : error})
    }
}

exports.updateDownvote = async(req,res)=>{
    try {
        const {id} = req.body
        const question = await QuestionModel.findById(id)
        await QuestionModel.updateOne({_id:id} , { $set: { upvotes: question.upvotes-1 }})
        res.status(200).json({message :"Added downvote"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}
