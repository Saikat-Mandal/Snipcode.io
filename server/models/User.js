const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role :{
    type:String,
    default:"normal"
  },
  dp:{
    type:String,
    required: false,
    default:""
  },
  about:{
    type:String,
    default:""
  },
  questions:[
    {
      type: mongoose.Types.ObjectId,
      ref:"Questions"
    }
  ],
  answers:[
    {
      type: mongoose.Types.ObjectId,
      ref:"Answers"
    }
  ]
} ,{ timestamps: true});

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;