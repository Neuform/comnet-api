const complaint = require("../models/complaints.model");
const complaintService = async (req)=>{
    console.log("complaint service")
    const {title,description,image,userId} = req;
    const result =  new complaint({title,description,image,createdBy:userId})
    const savedResult = await result.save();
    return savedResult;
}
module.exports = complaintService;
