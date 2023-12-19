const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chatRoomId: String,
  content: String,
  senderId: String,
});

const messageModel = mongoose.model("messageModel", messageSchema);

module.exports = messageModel;
