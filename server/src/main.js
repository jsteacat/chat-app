const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

io.on('connection', function (socket) {
    socket.on('enterRoom', function (room) {
        socket.join(room);
    });

    socket.on('leaveRoom', function (room) {
        socket.leave(room);
    });

    socket.on('newMessage', function (message) {
        Object.keys(socket.rooms).forEach(function(room) {
            io.sockets.in(room).emit('newMessage', message);
        });
    });
});

http.listen(port, function () {
    console.log('Listening on *:' + port);
});