const express = require('express')
const { authenticate } = require('../middlerware/auth.middleware')
const router = express.Router()
const controller = require('../controller/auth.controller')
const userController = require('../controller/user.controller')

router.get('/:id',authenticate,controller.findUserByIdController)
router.get('/token/:token',userController.getUserByToken)
module.exports = router