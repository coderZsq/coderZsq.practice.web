var express = require('express');

var server = express();

var rooms = [];

server.get('/roomlist', function(req, res) {
    resizeTo.send(rooms);
});

server.get('/createroom', function(req, res) {
    // console.log(req.query);
    var room = req.query;
    var isRepeat = false;
    for (var i = 0; i < rooms.length; i++) {
        var r = rooms[i];
        if (r.roomName === room.roomName) {
            isRepeat = true;
            res.send({
                'result': isRepeat
            });
            return;
        }
    }
    if (isRepeat === false) {
        rooms.push(room);
    }
    res.send({'result': isRepeat});
});

server.listen(8080);