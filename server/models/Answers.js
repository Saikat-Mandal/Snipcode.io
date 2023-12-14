const mongoose = require("mongoose");

const answerSChema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    code:{
        type:String,
    },
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    },
    questionId:{
        type: mongoose.Types.ObjectId,
        ref: "Questions",
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }

} ,{ timestamps: true});

const AnswerModel = mongoose.model("Answers", answerSChema);
module.exports = AnswerModel;