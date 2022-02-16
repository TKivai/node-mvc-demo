const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({})

const Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;