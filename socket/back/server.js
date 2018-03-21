var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = [];

io.on('connection', socket => {
  console.log('a user connected');
  io.emit('message', messages);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('message', msg => {
    messages.push(msg);
    io.emit('message', messages);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});