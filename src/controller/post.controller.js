/**
 * CREATE POST
 * DELETE POST
 * GET ALL POST
 * GET POST BY ID
 * LIKE POST 
 * ADD COMMENT 
 */
const postService = require("../services/post.service");

const addPostController = async (req, res) => {
    try {
        console.log("addPostController");
        console.log("user:", req.user);
        const result = await postService.createPostService(req.body, req.user._id);
        if (!result) {
            return res.status(401).send({
                success: false,
                message: "invalid post details",
                result
            })
        }
        return res.status(200).send(
            {
                success: true,
                message: "post created successfully",
                result
            }
        )
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }

}


const deletePostController = async (req, res) => {
    try {
        console.log("deletePostController");
        let { id } = req.params;
        console.log(id);
        const result = await postService.deletePostService(id);
        if (!result) {
            return res.status(404).send(
                {
                    success: false,
                    message: "Invalid post Id",
                    result
                }
            )
        }
        return res.status(200).send({
            success: true,
            message: "Post deleted successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}


const getAllPostController = async (req, res) => {
    try {
        console.log("getAllPostController");
        const result = await postService.getAllPostService();
        res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }

}


const getPostByIdController = async (req, res) => {
    try {
        console.log("getPostByIdController");
        const { id } = req.params;
        const result = await postService.getPostByIdService(id);
        if (!result) {
            return res.status(404).send(
                {
                    success: false,
                    message: "Invalid post Id",
                    result
                }
            )
        }
        return res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }

}


const likePostController = async (req, res) => {
    try {
        console.log("likePostController");
        const { id } = req.params;
        const hasUserLiked = await postService.hasUserLiked(req.user._id,id);
        if (!hasUserLiked) {
            const result = await postService.likePostService(id, req.user._id);
            if (!result) {
                return res.status(404).send(
                    {
                        success: false,
                        message: "Invalid post Id",
                        result
                    }
                )
            }
            return res.status(200).send({
                success: true,
                message: "post liked successfully",
                result
            })
        }
        return res.status(401).send(
            {
                success:true,
                message:"User has already Liked the post"
            }
        )

    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}
const addCommentPostController = async (req, res) => {
    try {
        console.log("addCommentPostController")
        const { id } = req.params;
        const result = await postService.addCommentService(id, req.user._id, req.body);
        if (!result) {
            return res.status(404).send(
                {
                    success: false,
                    message: "Invalid post Id",
                    result
                }
            )
        }
        return res.status(200).send({
            success: true,
            message: "Comment added successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

module.exports = { addPostController, deletePostController, getAllPostController, getPostByIdController, likePostController, addCommentPostController };


