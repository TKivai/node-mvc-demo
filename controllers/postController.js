const Post = require('../models/Posts')

exports.getPosts = (req, res) => {
    Post.find()
    .then((posts) => {
        console.log(posts)
        res.json({
            posts: posts
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.getOnePost = (req, res) => {
    res.json({
        post: "Post 1"
    })
}