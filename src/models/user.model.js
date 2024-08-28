const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        requires:true
    },
    lastName:{
        type:String,
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    houseNumber:{
        type:String
    },
    address:{
        type:String
    },
    role:{
        type:String,
        default:"member"
    },
    communityCode:{
        type:String,
    },
    community:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"communities"
    },
    email:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
const User = mongoose.model("users",userSchema)
module.exports = User;