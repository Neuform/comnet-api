const eventService = require("../services/event.service");

const eventController = async (req,res)=>{
    try {
        console.log("event Controller")
        const result = await eventService(req.body);
        if(result){
            return res.status(200).send({
                success:true,
                message:"New event added successfully",
                result
            })
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            error
        })
    }
}
module.exports = eventController;