const jwtProvider = require('../config/jwtProvider')
const User = require('../models/user.model')
const userService =require('../services/user.service')

const authenticate = async(req,res,next)=>{

    try{
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(404).send({error:"Token not found!"})
        }

        const userId = jwtProvider.getUserIdFromToken(token)
 
        const user =await userService.findUserById(userId)
      
        req.user = user
   

    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
    next()
}
const isAdmin = async (req,res,next)=>{
    try {
       
        // console.log(req.user)
        const {id} = req.user;
 
        let user = await User.findById(id);
        // console.log("The user is : ",user);
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
module.exports = {isAdmin,authenticate};
