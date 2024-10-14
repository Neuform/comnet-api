const complaint = require("../models/complaints.model");
const User = require("../models/user.model");

const addComplaintService = async (body,userId)=>{
    console.log("Complaint service")
    const {id} = userId
    const user = await User.findById(id)
    console.log(user.firstName+" "+user.lastName)
    const result =  new complaint({...body,createdBy:id,author:`${user.firstName} ${user.lastName}`})
    const savedResult = await result.save();
    return savedResult;
}

const getComplaintByIdService = async(id)=>{
    console.log("getComplaintByIdService");
    const result = await complaint.findById(id);
    return result;
}

const getAllComplaintService = async()=>{
    console.log("getAllComplaintService");
    const result = await complaint.find({});
    return result;
}

const updateComplaintService = async(id,body)=>{
    console.log("updateComplaintService");
    const result = await complaint.findByIdAndUpdate(id,body,{new:true})
    return result;
}

const deleteComplaintService = async(id)=>{
    console.log("deleteComplaintService");
    const result = await complaint.findByIdAndDelete(id);
    console.log(result);
    return result;
}

module.exports = {addComplaintService,getComplaintByIdService,getAllComplaintService,updateComplaintService,deleteComplaintService};
