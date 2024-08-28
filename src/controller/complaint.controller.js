const complaintService = require("../services/complaint.service")
const complaintController = async (req,res)=>{
    try {
        console.log("Complaint controller")
        let result = await complaintService(req.body);
        if(result){
        return res.status(200).send({
            success:true,
            message:"Complaint noted successfully",
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
module.exports = complaintController;