const complaintService = require("../services/complaint.service")
const addComplaintController = async (req,res)=>{
    try {
        console.log("Complaint controller")
        let result = await complaintService.addComplaintService(req.body,req.user);
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
            error:error.message
        })
    }  
}

const getAllComplaintController = async (req,res)=>{
    try {
        console.log("getAllComplaintController");
        const result = await complaintService.getAllComplaintService();
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
const getComplaintByIdController = async (req,res)=>{
    try {
        console.log("getEventByIdController");
        const {id} = req.params;
        console.log(id)
        const result = await complaintService.getComplaintByIdService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Complaint Not Found",
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
const updateComplaintController = async (req,res)=>{
    try {
        console.log("updateComplaintController")
        const {id} = req.params;
        const result = await complaintService.updateComplaintService(id,req.body);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Complaint Not Found",
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
const deleteComplaintController = async (req,res)=>{
    try {
        console.log("deleteEventController")
        const {id} = req.params;
        console.log(id)
        const result = await complaintService.deleteComplaintService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Complaint Not Found",
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
module.exports = {addComplaintController,getAllComplaintController,getComplaintByIdController,updateComplaintController,deleteComplaintController};
