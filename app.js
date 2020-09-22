const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// ROUTES
app.get('/', (req, res) => {
    res.send('<h1>We are on home</h1>');
});

// Connect to DB
mongoose.connect(process.env.DB_CONECTION, { useNewUrlParser: true, useUnifiedTopology: true },  () => {
    console.log("Connected to DB!");
});


// How to we start listening to the SERVER
/** HTTP Server Instance */
try {
    app.listen(3000, () => {
        console.log(`API running on http://localhost:3000`);
    });
} catch (ex) {
    console.log(ex);
}