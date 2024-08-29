const event = require("../models/event.model");
const addEventService = async (body,userId)=>{
    console.log("eventServices");
    const {id} = userId
    const result = new event({...body,createdBy:id});
    const savedResult = await result.save();
    return savedResult;
}

const getEventByIdService = async(id)=>{
    console.log("getEventByIdService");
    const result = await event.findById(id);
    return result;
}

const getAllEventService = async()=>{
    console.log("getAllEventService");
    const result = await event.find({});
    return result;
}

const updateEventService = async(id,body)=>{
    console.log("updateEventService");
    const result = await event.findByIdAndUpdate(id,body,{new:true})
    return result;
}

const deleteEventService = async(id)=>{
    console.log("deleteEventService");
    const result = await event.findByIdAndDelete(id);
    return result;
}
module.exports = {addEventService,getEventByIdService,getAllEventService,updateEventService,deleteEventService};