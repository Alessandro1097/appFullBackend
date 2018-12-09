var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setUpController = require('./controllers/setUpController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;
// styles
app.use('/', express.static(__dirname + '/public'));
// template
app.set('view engine', 'ejs');
// connection to the db 
mongoose.connect(config.getDbConnectionString());
setUpController(app);
// api controller
apiController(app);
// port
app.listen(port);