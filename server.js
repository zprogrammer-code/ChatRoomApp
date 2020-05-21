
const express = require('express');
//App setup

const app = express();
const server = app.listen(4000, function(){
    console.log('listening to request on port 4000');
});

// Routes/Config


app.set("view-engine", 'ejs')

app.get("/", (req, res) => {
    res.render(index.ejs)
})

app.get("/", (req, res) => {
    res.render(login.ejs)
})

app.get("/", (req, res) => {
    res.render(register.ejs)
})



const socket = require('socket.io');

//Static files

app.use(express.static('public'));

// Socket setup

const io = socket(server);

io.on('connection', function(socket){
console.log('made socket connection', socket.id)

socket.on('chat', function(data){
    io.sockets.emit('chat', data);
});

socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
});

});









