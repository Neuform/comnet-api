const express = require('express')
const authRoutes = require('../src/routes/auth.routes')
const complaintRoutes = require('../src/routes/complaint.routes')
const eventRoutes = require("../src/routes/event.routes");
const noticeRoutes = require("../src/routes/notice.routes");
const postRoutes = require("./routes/post.routes")
const communityRoutes = require("./routes/community.routes");
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use('/auth',authRoutes);
app.use('/complaint',complaintRoutes);
app.use('/event',eventRoutes);
app.use("/notice",noticeRoutes);
app.use("/post",postRoutes);
app.use("/community",communityRoutes);
module.exports = app