const mongoose = require("mongoose");
const { on } = require("nodemon");

const chatRoomSchema = new mongoose.Schema({
  roomName: String,
  members: [],
});

const chatRoomModel = mongoose.model("chatRoom", chatRoomSchema);

module.exports = chatRoomModel;
