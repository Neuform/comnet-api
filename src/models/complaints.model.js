const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
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
    author:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Complaint = mongoose.model('complaints',complaintSchema)
module.exports = Complaint