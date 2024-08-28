const router = require("../config/config.routes.js");
const authMiddleware = require("../middlerware/auth.middleware.js")

let complaintController = require("../controller/complaint.controller.js")
router.post("/registerComplaint",authMiddleware.requireSignIn,complaintController);
module.exports = router;
