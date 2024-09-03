const authMiddleware = require('../middlerware/auth.middleware');
const eventController = require("../controller/event.controller");
const express = require('express')
const router = express.Router()

// add new event
router.post("/add",authMiddleware.authenticate,authMiddleware.isAdmin,eventController.addEventController);

// get all events
router.get("/all",authMiddleware.authenticate,authMiddleware.isAdmin,eventController.getAllEventController);

// get event by its id
router.get("/:id",authMiddleware.authenticate,authMiddleware.isAdmin,eventController.getEventByIdController);

// update event by its id
router.put("/:id/update",authMiddleware.authenticate,authMiddleware.isAdmin,eventController.updateEventController);

// delete event by its id
router.delete("/:id/delete",authMiddleware.authenticate,authMiddleware.isAdmin,eventController.deleteEventController);
module.exports = router;