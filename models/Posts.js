const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;