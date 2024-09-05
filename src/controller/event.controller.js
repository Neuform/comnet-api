const eventService = require("../services/event.service");

// add event controller
const addEventController = async (req,res)=>{
    try {
        console.log("event Controller")
        const result = await eventService.addEventService(req.body,req.user);
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

// get event Controller 
const getEventByIdController = async(req,res)=>{
    try {
        console.log("getEventByIdController");
        const {id} = req.params;
        console.log(id)
        const result = await eventService.getEventByIdService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Event Not Found",
                result
            })
        }
        res.status(200).send({
            success:true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            error:error.message
        }) 
    }
}

// get All event Controller
const getAllEventController = async(req,res)=>{
    try {
        console.log("getAllEventController");
        const result = await eventService.getAllEventService();
        res.status(200).send({
            success:true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

// update event controller
const updateEventController = async(req,res)=>{
    try {
        console.log("updateEventController")
        const {id} = req.params;
        const result = await eventService.updateEventService(id,req.body);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Event Not Found",
                result
            })
        }
        res.status(200).send({
            success:true,
            result
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

// delete event controller 
const deleteEventController = async(req,res)=>{
    try {
        console.log("deleteEventController")
        const {id} = req.params;
        console.log(id)
        const result = await eventService.deleteEventService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Event Not Found",
                result
            })
        }
        res.status(200).send({
            success:true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            error:error.message
        })
    }
}
module.exports = {addEventController,getEventByIdController,getAllEventController,updateEventController,deleteEventController};