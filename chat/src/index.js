const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CHAT_SERVICE running");
});

app.listen(5001, () => {
  console.log("CHAT_SERVICE ON 5001");
});
