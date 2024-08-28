const notice = require("../models/notice.model");
const noticeService = async (req)=>{
    console.log("noticeServices");
    const {title,description,image,userId} = req;
    const result = new notice({title,description,image,createdBy:userId});
    const savedResult = await result.save();
    return savedResult;
}
module.exports = noticeService;