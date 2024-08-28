const authMiddleware = require('../middlerware/auth.middleware');
const eventController = require("../controller/event.controller");
const router = require('../config/config.routes');
router.post("/addEvent",authMiddleware.requireSignIn,authMiddleware.isAdmin,eventController);
module.exports = router;