const express = require('express')

const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const authRoutes = require('../src/routes/auth.routes')
app.use('/auth',authRoutes)

module.exports = app