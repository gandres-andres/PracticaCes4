var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = [];

function getMessage(channel) {
  var mensajes = [];
  for (var i = 0; i < messages.length; i++) {
    if (messages[i].channel === channel) {
      mensajes.push(messages[i]);
    }
  }
  return mensajes;
}

io.on('connection', socket => {
  console.log('a user connected');

  var channel = '1';
  io.emit('messages', getMessage(channel));

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new-message', msg => {
    messages.push(msg);
    io.emit('messages', getMessage(msg.channel));
  });

  socket.on('change channel', function (newChannel) {
    if (newChannel != channel) {
      socket.leave(channel);
      socket.join(newChannel);
      channel = newChannel;
    }
    if (getMessage(channel) != null) {
      io.emit('messages', getMessage(channel));
    }
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});