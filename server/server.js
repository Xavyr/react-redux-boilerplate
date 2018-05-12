//npm modules
const express = require('express');
const path = require('path');

//the actual express app instance;
const app = express();

//parsing body for post routes
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//pathing to specific files
app.use(express.static(path.join(__dirname, './../public')));

app.get('/api', (req, res) => {
	console.log('hit the home route');
	res.send('from home api route');
});










app.listen(3000);

module.exports = app;