const jwt = require("jsonwebtoken")
exports.isLoggedIn = async(req,res,next)=>{
    try {
         req.token = jwt.verify(req.cookies.jwt , process.env.JWT_SECRET )
         const token = req.token
         next()
    } catch (error) {
        res.status(500).json({message:"User not logged in!"})
    }
}