const noticeService = require("../services/notice.service");

const noticeController = async (req,res)=>{
    try {
        console.log("noticeController")
        const result = await noticeService(req.body);
        if(result){
            return res.status(200).send({
                success:true,
                message:"New notice added successfully",
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
module.exports = noticeController;