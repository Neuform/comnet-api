const event = require("../models/event.model");
const eventService = async (req)=>{
    console.log("eventServices");
    const {title,description,image,userId} = req;
    const result = new event({title,description,image,createdBy:userId});
    const savedResult = await result.save();
    return savedResult;
}
module.exports = eventService;