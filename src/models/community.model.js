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
    }]
})

const Community = mongoose.model('communities',communitySchema)
module.exports = Community