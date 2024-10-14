/**
 * CREATE POST
 * DELETE POST
 * GET POST BY ID
 * GET ALL POST
 * LIKE POST
 * ADD COMMENT
 */
const post = require("../models/post.model");
const User = require("../models/user.model");



const createPostService = async (body,userId)=>{
    console.log('createPostService');
    console.log("userId :",userId);
    console.log("body :",body);
    const user =await User.findById(userId)
    console.log(user)
    const author = `${user.firstName} ${user.lastName}`
    const result = new post({...body,author:author});
    const savedResult = await result.save();
    return savedResult;
}
const deletePostService= async (postId)=>{
    console.log("deletePostService");
    const result = await post.findByIdAndDelete(postId);
    return result ;
}
const getAllPostService = async ()=>{
    console.log("getAllPostService");
    const result = await post.find({});
    return result;
}
const getPostByIdService = async (postId)=>{
    console.log("getPostByIdService");
    const result = await post.findById(postId);
    return result;
}
const hasUserLiked = async(userId,postId)=>{
    console.log("hasUserLiked")
    const result =  await post.findOne({_id:postId,"likes.user":userId}); 
    return result;
}
const likePostService = async (postId,userId)=>{
    console.log("likePostService");
    const result = await post.findByIdAndUpdate(postId,{$push:{likes:{user:userId}}},{new:true});
    return result ;
}
const addCommentService = async (postId,userId,text)=>{
    console.log("addCommentService");
    const result = await post.findByIdAndUpdate(postId,{$push:{comments:{...text,user:userId}}},{new:true});
    return result;
}
const unlikePostService = async (postId, userId) => {
    console.log('check',postId)
    const result = await post.findByIdAndUpdate(
        postId,
        { $pull: { likes: { user: userId } } }, // This pulls the like for the user
        { new: true } // Return the updated document
    );
    console.log(result)
    return result;
};

module.exports ={createPostService,deletePostService,getAllPostService,likePostService,getPostByIdService,addCommentService,hasUserLiked,unlikePostService}