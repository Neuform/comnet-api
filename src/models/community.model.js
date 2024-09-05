const mongoose = require('mongoose')

const communitySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    address:{
        type:String
    },
    communityCode:{
        type:String,
        required:true
    },
    admin:{
        type:String
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    image:{
        type:String,
        default:'https://ik.imagekit.io/1tts9ykov/COMNET/COMNET.png?updatedAt=1725344228082'
    }
})

const Community = mongoose.model('communities',communitySchema)
module.exports = Community