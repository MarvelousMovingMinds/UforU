var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var router = require('./router/router.js');

var app = express();
var IP = process.env.IP || 'localhost';
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

app.listen(PORT, function () {
  console.log('listening right now on port', PORT);
});
console.log('listening on', IP, PORT);

module.exports.app = app;
