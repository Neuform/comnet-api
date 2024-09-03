const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    caption:{
        type:String
    },
    image: {
        type: String,
        required: true
    },
    likes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        likedAt: {
            type: Date,
            default: Date.now
        }
    }],
    comments: [commentSchema]
}, { timestamps: true });

const Post = mongoose.model('posts', postSchema);

module.exports = Post;
