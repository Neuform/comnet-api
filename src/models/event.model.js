const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
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

const Event = mongoose.model('events',eventSchema)
module.exports = Event