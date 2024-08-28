const router = require("../config/config.routes")
const auth = require('../controller/auth.controller')
router.post('/login',auth.login);
router.post('/register',auth.register)
module.exports = router;