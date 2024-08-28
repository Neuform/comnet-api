const jwt = require('jsonwebtoken')

//any random string as key
const KEY = '462dff03e4fcfe3361e06bd7b5f99909666e05d8'
const generateToken=(userId)=>{
    const token = jwt.sign({userId},KEY,{expiresIn:'48h'})
    console.log("token is : ",token);
    return token;
}

const getUserIdFromToken=(token)=>{
    // console.log(token);
    try {
        const decoded = jwt.verify(token,KEY);
        return decoded.userId;
    } catch (error) {
        throw new Error('Invalid token');
    }
}

module.exports = {generateToken,getUserIdFromToken}