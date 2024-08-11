const http = require('http').createServer();
const io = require('socket.io')(http, {cors: {origin: '*',},});

io.on("connection", socket => {
console.log("connected");

socket.on("disconnect", () => {
  console.log("disconnected");
});



});

http.listen(8081, () => {console.log("listening on port: 8081")});
