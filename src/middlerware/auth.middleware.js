const jwtProvider = require('../config/jwtProvider')
const User = require('../models/user.model')

const requireSignIn = async (req,res,next)=>{
    try {
        const id = jwtProvider.getUserIdFromToken(req.headers.authorization);
        // console.log(id)
        req.user = {id}
        next();
    } 
    catch (error) {
        console.log("YOUR ERROR",error.message)
        res.send({
            success:false,
            error:error.message,
            message:"Your have to sign-in first"
        })
    }   
}
const isAdmin = async (req,res,next)=>{
    try {
        console.log("in middleware")
        const {id} = req.user;
        console.log(id);
        let user = await User.findById(id);
        console.log("The user is : ",user);
        if(user.role === "admin"){
            return next()
        }
        res.status(401).send({
            success:"false",
            message:"Unauthorized user,Only admin can access this Page"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,
            error,
            message:"Internal server error"
        })
    }
}
module.exports = {isAdmin,requireSignIn};
