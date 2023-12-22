const CommentModel = require("../models/Comments")
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
        const {title , body , tags} = req.body
        const id = req.token.id

        const newQuestion = {
            title : title,
            body:body,
            tags:tags,
            userId:id,
            answers:[],
            comments:[]
        }

        const createQuestion = await QuestionModel.create(newQuestion)
        const userId = req.token.id
        const user = await UserModel.findById(userId)
         user.questions.push(createQuestion._id)
         await user.save()
        res.send({message:"New question created !" , createQuestion})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

// get question by id 
exports.getQuestionById = async(req,res)=>{
    try {
        const questionId = req.query.q
        const question = await QuestionModel.findById(questionId).populate([{
            path: 'comments',
            model: 'Comments',
            populate: {
                path: 'userId',
                model: 'Users',
                select: 'firstname lastname'
            }
        },
        {
            path: 'answers',
            model: 'Answers',
            populate: {
                path: 'userId',
                model: 'Users',
                select: 'firstname lastname'
            }
        }
    ])
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
        await QuestionModel.updateOne({_id:id} , { $set: { downvotes: question.downvotes-1 }})
        res.status(200).json({message :"Added downvote"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}


// add a commment to quesiton 
exports.addCommentToQuestion=async(req,res)=>{
    try {
        const userId = req.token.id
        const{id , comment} = req.body
        const newCommentObj = {
            comment : comment,
            userId:userId
        }
        const user = await UserModel.findById(userId)
        const newComment = await CommentModel.create(newCommentObj) 
        // after the new comment is created 
        const question = await QuestionModel.findById(id)
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
          }
        question.comments.push(newComment._id)
        await question.save();
        user.comments.push(newComment._id)
        await user.save()
        res.status(200).json({message : "Comment added successfully" } )
      

    } catch (error) {
        res.status(500).json({message:"Internal server error for adding comment"})
    }
}