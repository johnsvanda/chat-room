const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
const server = app.listen(PORT, () =>
  console.log("Server is running on port: " + PORT)
);
const io = require("socket.io")(server, { origins: "*:*" });

//Middlewares
äpp.use(cors);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("join", ({ name, chatroom }) => {
    socket.join(chatroom);
    console.log(`${name} has joined ${chatroom}`);

    socket.on("chat-message", message => {
      socket.broadcast.to(chatroom).emit("chat-message", message);
    });
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});
