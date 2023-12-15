const mongoose = require("mongoose");

const answerSChema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    },
    correct:{
        type:Boolean,
        default:false,
        required:false
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