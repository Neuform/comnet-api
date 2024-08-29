const noticeService = require("../services/notice.service");

// add Notice Controller
const addNoticeController = async (req, res) => {
    try {
        console.log("noticeController");
        const result = await noticeService.addNoticeService(req.body, req.user);
        res.status(200).send({
            success: true,
            message: "New notice added successfully",
            result
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            error
        })
    }
}

// update Notice Controller
const updateNoticeController = async (req, res) => {
    try {
        console.log('updateNoticeController');
        const { id } = req.params;
        console.log(id);
        const result = await noticeService.updateNoticeService(id, req.body);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Notice Not Found",
                result
            })
        }
        return res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            succes: false,
            error: error.message
        })
    }
}

// get Notice By ID Controller
const getNoticeByIdController = async (req, res) => {
    try {
        console.log('getNoticeByIdController');
        const { id } = req.params;
        console.log(id);
        const result = await noticeService.getNoticeByIdService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Notice Not Found",
                result
            })
        }
        return res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            succes: false,
            error: error.message
        })
    }
}

// get All notice Controller
const getAllNoticeController = async (req, res) => {
    try {
        console.log('getAllNoticeController')
        const result = await noticeService.getAllNoticeService();
        res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            succes: false,
            error: error.message
        })
    }

}

// delete A notice Controller
const deleteNoticeController = async (req, res) => {
    try {
        console.log('deleteNoticeController')
        const { id } = req.params;
        const result = await noticeService.deleteNoticeService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Notice Not Found",
                result
            })
        }
        return res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            succes: false,
            error: error.message
        })
    }
}
module.exports = { addNoticeController, updateNoticeController, deleteNoticeController, getAllNoticeController, getNoticeByIdController };