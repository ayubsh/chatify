const express = require("express");

const chatRoomModel = require("../models/chat-room-model");

const router = express.Router();

//TODO: proper error handling, use error handling middleware

//TODO: validate the body
//create chat-room
router.post("/newroom", async (req, res) => {
  try {
    const { userOne, userTwo } = req.body;

    const foundroom = await chatRoomModel.findOne({
      memebers: { $all: [(userOne, userTwo)] },
    });

    if (foundroom) res.send(foundroom);

    const newRoom = {
      roomName: "someName",
      members: [userOne, userTwo],
    };

    const createdRoom = new chatRoomModel(newRoom);
    const saveRoom = await createdRoom.save();

    console.log(saveRoom);
    res.json(saveRoom);
  } catch (error) {
    console.log(error);
  }
});

//get chatrooms
//router.get("/", async (req, res) => {
//const rooms = await chatRoomModel.find();

//console.log(rooms);
//res.send(rooms);
//});

//get chatrooms by id
//TODO: handle the params id, ((type string) at path "_id" for model "chatRoom")
//
//router.get("/:id", async (req, res) => {
//try {
//const { id } = req.params;
//const foundroom = await chatRoomModel.findOne({ _id: id });
//if (!foundroom) res.json("can not find room with that id");
//res.json(foundroom);
// } catch (error) {
// console.log(error);
//}
//});

//finds all chat rooms a certain user is in
///api/chats/:userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const foundchats = await chatRoomModel.find({
      members: { $in: [userId] },
    });

    res.json(foundchats);
  } catch (error) {
    console.log(error);
  }
});
//finds specific chat room that the two user are in
///api/chats/find/:userOne/:userTwo
router.get("/find/:userOne/:userTwo", async (req, res) => {
  const { userOne, userTwo } = req.params;
  try {
    const foundchat = await chatRoomModel.findOne({
      members: { $all: [userOne, userTwo] },
    });

    res.json(foundchat);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
