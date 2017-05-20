const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const router = require('./router/router');
const socketController = require('./controllers/socketControllers');

const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function () {
  console.log('listening on', PORT);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

// attach socket.io to server and port
var io = require('socket.io')(server);

// listeners for socket.io events
io.on('connection', function(client) {
  client.on('room', function(room) {
    client.join(room);
    io.to(room).emit('roomResponse', 'You are in room: ' + room);

    client.on('comment', function(post) {
      socketController.comments.addComment(post, room, client);
    });
  });
});

module.exports.io = io;
