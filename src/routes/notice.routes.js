const authMiddleware = require('../middlerware/auth.middleware');
const noticeController = require("../controller/notice.controller");
const router = require('../config/config.routes');
router.post("/addNotice",authMiddleware.requireSignIn,authMiddleware.isAdmin,noticeController);
module.exports = router;