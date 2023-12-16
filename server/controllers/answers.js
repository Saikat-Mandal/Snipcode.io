const AnswerModel = require("../models/Answers")
const QuestionModel = require("../models/Question")


// post a new answer 
exports.postAnswerController = async(req,res)=>{
    try {
        const userId = req.token.id
        const{questionId , body} = req.body
        
        const answerObj ={
            body:body,
            questionId:questionId,
            userId : userId
        }

        const newAnwer = await AnswerModel.create(answerObj)
        const question = await QuestionModel.findById(questionId)

        question.answers.push(newAnwer._id)
         await question.save()
        
        res.status(200).json({message:"Answer posted"}) 
    } catch (error) {
        res.status(500).json({message:"Internal server error for adding answer" })
    }
}


// make answer correct 

exports.makeAnswerCorrect = async(req,res)=>{
    try {
        const{ answerId} = req.body
        const answer = await AnswerModel.findById(answerId)

        await AnswerModel.updateOne({_id : answerId} , {
            $set : {
                correct : !answer.correct
            }
        })
        res.status(200).json({message : "Update successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal server error for making answer correct" })
    }
}

// give upvote 
exports.updateUpvote = async(req,res)=>{
    try {
        const {answerId} = req.body
        const answer = await AnswerModel.findById(answerId)
        await AnswerModel.updateOne({_id:answerId} , { $set: { upvotes: answer.upvotes+1 }})
        res.status(200).json({message :"Added upvote"})
    } catch (error) {
        res.status(500).json({message:"Internal server error" , error : error})
    }
}


// give downvote 
exports.updateDownvote = async(req,res)=>{
    try {
        const {answerId} = req.body
        const answer = await AnswerModel.findById(answerId)
        await AnswerModel.updateOne({_id:answerId} , { $set: { downvotes: answer.downvotes-1 }})
        res.status(200).json({message :"Added downvote"})
    } catch (error) {
        res.status(500).json({message:"Internal server error" , error : error})
    }
}