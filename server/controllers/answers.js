const AnswerModel = require("../models/Answers")
const QuestionModel = require("../models/Question")

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

