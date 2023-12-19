const express = require("express");

const messageModel = require("../models/message-model");

const router = express.Router();

//createMessage
router.post("/", async (req, res) => {
  const { senderId, content, chatRoomId } = req.body;
  const newMessage = new messageModel({ senderId, content, chatRoomId });
  try {
    await newMessage.save();

    console.log(newMessage);
    res.json(newMessage);
  } catch (error) {
    console.log(error);
  }
});

//getMessagesByRoomId

router.get("/:roomId", async (req, res) => {
  const { roomId } = req.params;
  try {
    const foundmessages = await messageModel.find({ chatRoomId: roomId });
    console.log(foundmessages);
    res.send();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
