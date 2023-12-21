const express = require("express");
const cors = require('cors')

const chat_router = require("./routes/chat-room.routes");
const message_router = require("./routes/message-router");

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/chats", chat_router);
app.use("/api/messages", message_router);

app.get("/", (req, res) => {
  res.send("CHAT_SERVICE");
});

module.exports = app;
