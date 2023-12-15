const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    comment:{
            type:String,
            required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"Users"
    },

} ,{ timestamps: true});

const CommentModel = mongoose.model("Comments", commentsSchema);
module.exports = CommentModel;