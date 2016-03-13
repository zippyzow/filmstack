/**
 * Created by haileykeen on 2/1/16.
 */
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/router');
var app = express();

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', routes);

app.listen(3000, function(req, res) {
  console.log('Server listening at http://localhost:3000');
});

