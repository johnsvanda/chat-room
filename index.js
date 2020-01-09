const express = require("express");
const app = express();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const path = require("path");
//node server
const server = http.listen(PORT, () =>
  console.log("Server is running on port: " + PORT)
);
//socket server
const io = require("socket.io")(server, { origins: "*:*" });
const { addUser, removeUser, getUsersInRoom } = require("./usersEvents");

//middleware
app.use(bodyParser.json());

//production
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/hey", (req, res) => {
  res.send("hou");
});

//http
app.post("/getUsersInRoom", (req, res) => {
  const userExists = getUsersInRoom(req.body.room).find(
    user => user.name === req.body.name
  );
  userExists ? res.send(true) : res.send(false);
});
//socket
io.on("connection", socket => {
  console.log("a user connected");
  socket.on("join", ({ name, chatroom }) => {
    const { error, user } = addUser({ id: socket.id, name, room: chatroom });
    if (error) {
      console.log(error);
      socket.disconnect();
    } else {
      socket.join(user.room);
      console.log(`${user.name} has joined ${user.room}`);
      socket.broadcast.to(user.room).emit("chat-message", {
        message: `has joined ${user.room}`,
        user: user.name
      });

      socket.on("chat-message", message => {
        socket.broadcast.to(chatroom).emit("chat-message", message);
      });
    }
  });

  socket.on("disconnect", function() {
    removeUser(socket.id);
    console.log("user disconnected");
  });
});
