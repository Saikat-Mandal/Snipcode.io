const UserModel = require("../models/Users");
const jwt = require("jsonwebtoken")

exports.registerController = async (req,res)=>{
    try {
        const {
           firstname,
            lastname,
            email,
            username,
            password,
            dp
          } = req.body;

          const user = await UserModel.findOne({ email: email });
          if (user) return res.status(400).json({ message: "user already exists" });

          const newUser = new UserModel({
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            password: password,
            dp:dp,
            questions:[],
            answers:[]
          });

          await newUser.save();
          res.json({ message: "user successfully registered" });

    } catch (error) {
        res.status(500).json({message:"Internal server error for register" , Error : error})
    }
}


exports.loginController = async (req,res)=>{
    try {
        const{email , password} = req.body
        
        const user = await UserModel.findOne({email:email})

        if(!user) return res.status(400).json({message:"User does not exists!"})

        if(user.password != password) return res.status(400).json({message:"Passwords do not match"})

        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)
        
        res.cookie("jwt" , token , {
            withCredentials: true,
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })

///////////////////
        res.status(200).json({message : "Successfully logged in" , token, id: user._id } )
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

// logout function
exports.logoutController= (req, res) => {
    res.cookie("jwt", "", {
      expires: new Date(0),
      httpOnly: true,
    });
    res.status(200).json({ message: "successfully logged out" });
};


// get all users 
exports.getAllUsers = async(req,res)=>{
  try {
    const users = await UserModel.find({})
    if(users == []) return res.status(400).json({message : "no users found"})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
}

exports.getUserById = async(req,res)=>{
  try {
    const userId = req.token.id
    const user = await UserModel.findById(userId)
    return res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
}

exports.updateUser = async(req,res)=>{
  try {
    const userId = req.token.id

    const obj = {}

    for(let key in req.body){
      if(req.body[key] != ""){
        obj[key] = req.body[key] 
      }
    }

    // const user = await UserModel.findById(userId)
     await UserModel.updateOne({_id :userId} , 
      {
        $set : obj
      })

    return res.status(200).json({message : "successfully updated"})


  } catch (error) {
    res.status(500).json({message:"Internal server error"})
  }
}