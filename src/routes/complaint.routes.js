const express = require('express')
const router = express.Router()
const authMiddleware = require("../middlerware/auth.middleware.js")
let complaintController = require("../controller/complaint.controller.js")
router.post("/add",authMiddleware.requireSignIn,complaintController.addComplaintController);
router.get("/all",authMiddleware.requireSignIn,complaintController.getAllComplaintController);
router.get("/:id",authMiddleware.requireSignIn,complaintController.getComplaintByIdController);
router.put("/:id/update",authMiddleware.requireSignIn,complaintController.updateComplaintController);
router.delete("/:id/delete",authMiddleware.requireSignIn,complaintController.deleteComplaintController);
module.exports = router;
