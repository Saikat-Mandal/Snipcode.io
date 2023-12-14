const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    tags:[
        {
            type:String,
            required:false
        }
    ],
    upvotes:{
        type:Number,
        default:0,
        required:false
    },
    downvotes:{
        type:Number,
        default:0,
        required:false
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"Users"
    },
    answers:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Answers",
            required:false
        }
    ],
    comments:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Users",
            required:false
        }
    ],


} ,{ timestamps: true});

const QuestionModel = mongoose.model("Questions", questionSchema);
module.exports = QuestionModel;