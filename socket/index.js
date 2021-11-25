const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", function (socket) {
  const buf = Buffer.alloc(454346);

  console.log(buf);
  socket.on("ping", function () {
    socket.emit("pong", buf);
  });
});

http.listen(3000, function () {
  console.log("listening on localhost:3000");
});
