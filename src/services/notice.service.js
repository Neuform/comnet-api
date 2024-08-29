const notice = require("../models/notice.model");

// add Notice service
const addNoticeService = async (body,userId)=>{
    console.log("noticeServices");
    const {id} = userId;
    const result = new notice({...body,createdBy:id});
    const savedResult = await result.save();
    return savedResult;
}

// Get notice by id Service
const getNoticeByIdService = async(id)=>{
    console.log('getNoticeByIdService')
    const result = await notice.findById(id);
    return result;
}

// get all Notice service
const getAllNoticeService = async()=>{
    console.log('getAllNoticeService');
    const result = await notice.find({});
    console.log(result)
    return result;
}

// update Notice Service
const updateNoticeService = async(id,body)=>{
    console.log('updateNoticeService')
    const result = await  notice.findByIdAndUpdate(id,body,{new:true});
    return result ;
}

// delete notice service 
const deleteNoticeService = async(id)=>{
    console.log('deleteNoticeService');
    const result = await notice.findByIdAndDelete(id);
    return result ;
}
module.exports = {addNoticeService,updateNoticeService,getNoticeByIdService,getAllNoticeService,deleteNoticeService};