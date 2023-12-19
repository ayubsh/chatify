const mongoose = require("mongoose");

const app = require("./app");

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/your_database_name");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
  app.listen(5001, () => {
    console.log("CHAT_SERVICE ON 5001");
  });
}

main();
