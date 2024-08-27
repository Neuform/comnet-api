const mongoose = require('mongoose')

const mongodbUrl = "mongodb+srv://dev01:LiTLPHRL1l1TMzAF@comnet.7gwdd.mongodb.net/?retryWrites=true&w=majority&appName=COMNET"

const connectDb = () =>{
    return mongoose.connect(mongodbUrl)
}

module.exports={connectDb}