const service = require('../services/user.service')

const getUserByToken = async(req,res)=>{
    const token = req.params.token
    try {
        const user = await service.getUserProfileByToken(token);
        console.log(user)
        return res.status(200).send({user:user})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {getUserByToken}