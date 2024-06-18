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
    default:"",
    required: false,
  },
  location:{
    type:String,
    default:"",
    required: false,
  },
  github:{
    type:String,
    default:"",
     required: false,
  },
  twitter:{
    type:String,
    default:"",
     required: false,
  },
  website:{
    type:String,
    default:"",
     required: false,
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
  ],
  comments:[
    {
      type: mongoose.Types.ObjectId,
      ref:"Comments"
    }
  ]
} ,{ timestamps: true});

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;