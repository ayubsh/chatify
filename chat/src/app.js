const express = require("express");

const chat_router = require("./routes/chat-room.routes");
const message_router = require("./routes/message-router");

const app = express();

app.use(express.json());

app.use("/api/chat", chat_router);
app.use("/api/message", message_router);

app.get("/", (req, res) => {
  res.send("CHAT_SERVICE");
});

module.exports = app;
