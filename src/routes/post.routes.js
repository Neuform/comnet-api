/**
 * /CREATE
 * /:ID/DELETE
 * /:ID
 * /ALL
 * /:ID/LIKE
 * /:ID/COMMENT
 */
const express = require('express')
const postController = require("../controller/post.controller");
const authMiddleware = require("../middlerware/auth.middleware");
const router = express.Router()

router.post("/create",authMiddleware.authenticate,postController.addPostController);
router.get("/all",authMiddleware.authenticate,postController.getAllPostController);
router.delete("/:id/delete",authMiddleware.authenticate,postController.deletePostController);
router.get("/:id",authMiddleware.authenticate,postController.getPostByIdController);
router.put("/:id/like",authMiddleware.authenticate,postController.likePostController);
router.put("/:id/comment",authMiddleware.authenticate,postController.addCommentPostController);


module.exports = router;
