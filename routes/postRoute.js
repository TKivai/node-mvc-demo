const express = require('express')
const router = express.Router()

const postsController = require('../controllers/postController')

router.get('/', postsController.getPosts)

router.get('/all', postsController.getPosts)

router.get('/one/:postid', postsController.getOnePost)

module.exports = router
