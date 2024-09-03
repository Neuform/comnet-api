const express = require('express')
const router = express.Router()
const authMiddleware = require("../middlerware/auth.middleware.js")
let complaintController = require("../controller/complaint.controller.js")

router.post("/add",authMiddleware.authenticate,complaintController.addComplaintController);
router.get("/all",authMiddleware.authenticate,complaintController.getAllComplaintController);
router.get("/:id",authMiddleware.authenticate,complaintController.getComplaintByIdController);
router.put("/:id/update",authMiddleware.authenticate,complaintController.updateComplaintController);
router.delete("/:id/delete",authMiddleware.authenticate,complaintController.deleteComplaintController);

module.exports = router;
