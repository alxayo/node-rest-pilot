// Node Express Server REST API

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Express
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongoose
mongoose.connect('mongodb://localhost:27017/test');

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');

// Path: routes/api.js
// REST API

// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Book = require('../models/Book');

// Routes
Book.methods(['get', 'put', 'post', 'delete']);
Book.register(router, '/books');

// Return router
module.exports = router;

// Path: models/Book.js
// Book model

// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var bookSchema = new mongoose.Schema({
    title: String,