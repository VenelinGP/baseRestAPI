const express = require('express');
const router = express.Router();
const createPostController = require('../controllers/posts-controller');
const PostController = createPostController();

router
    // GET BACK ALL THE POSTS
    .get('/', PostController.getAllPosts)
    // SUBMITS A POST
    .post('/', PostController.sendPost)
    // GET A SPECIFIC POST
    .get('/:postId', PostController.getPost)
    // DELETE A SPECIFIC POST
    .delete('/:postId', PostController.deletePost)
    // UPDATE A SPECIFIC POST
    .patch('/:postId', PostController.updatePost);


module.exports = router;