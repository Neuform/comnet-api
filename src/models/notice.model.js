const mongoose = require('mongoose')

const noticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Notice = mongoose.model("notices",noticeSchema)
module.exports = Notice