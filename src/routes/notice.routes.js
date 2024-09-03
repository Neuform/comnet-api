const authMiddleware = require('../middlerware/auth.middleware');
const noticeController = require("../controller/notice.controller");
const express = require('express')
const router = express.Router()

// add new Notice
router.post("/add",authMiddleware.authenticate,authMiddleware.isAdmin,noticeController.addNoticeController);

// get all Notices
router.get("/all",authMiddleware.authenticate,authMiddleware.isAdmin,noticeController.getAllNoticeController);

// get a Notice by Id
router.get("/:id",authMiddleware.authenticate,authMiddleware.isAdmin,noticeController.getNoticeByIdController);

// update a Notice
router.put("/:id/update",authMiddleware.authenticate,authMiddleware.isAdmin,noticeController.updateNoticeController);

// delete A Notice 
router.delete("/:id/delete",authMiddleware.authenticate,authMiddleware.isAdmin,noticeController.deleteNoticeController)

module.exports = router;