const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const PostShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const PostsModel = mongoose.model('Posts', PostShema);
module.exports = PostsModel;