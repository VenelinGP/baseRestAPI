const Post = require('../models/Post');

module.exports = () => {
    async function getAllPosts(req, res) {
        console.log("GET ALL POSTS");
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (error) {
            res.json({ message: error });
        }
    }
    async function sendPost(req, res) {
        console.log("SUBMITS A POST");
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        try {
            const savedPosts = await post.save();
            res.json(savedPosts);
        } catch (error) {
            res.json({ message: error });
        }
    }
    async function getPost(req, res) {
        console.log("GET A SPECIFIC POST");
        try {
            const post = await Post.findById(req.params.postId);
            res.json(post);
        } catch (error) {
            res.json({ message: error });
        }
    }

    async function deletePost(req, res) {
        console.log("DELETE A SPECIFIC POST");
        try {
            const removedPost = await Post.deleteOne({ _id: req.params.postId });
            res.json(removedPost);
        } catch (error) {
            res.json({ message: error });
        }
    }

    async function updatePost(req, res) {
        console.log("UPDATE A SPECIFIC POST");
        try {
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                {
                    $set: {
                        title: req.body.title,
                        description: req.body.description
                    }
                });
            res.json(updatedPost);
        } catch (error) {
            res.json({ message: error });
        }
    }

    return {
        getAllPosts,
        sendPost,
        getPost,
        deletePost, 
        updatePost
    };
};