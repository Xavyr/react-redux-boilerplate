//npm modules
const express = require('express');
const mongoose = require('mongoose');

//files


const path = require('path');

//the actual express app instance;
const app = express();

//parsing body for post routes
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//pathing to specific files
app.use(express.static(path.join(__dirname, './../public')));

app.get('/', (req, res) => {
	console.log('hit the slash and redirected to login- make use of cookies here');
	//automatically serving the index.html out of the app.use route.
});










app.listen(3000);

module.exports = app;