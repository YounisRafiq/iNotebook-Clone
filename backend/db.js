const mongoose = require("mongoose");

const connectTOmongoDb = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/inotebook");
    console.log("Connected to MongoDb SuccessFully");
  } catch (error) {
    console.log("Error Happen While Connecting the DataBase")
  }
};

module.exports = connectTOmongoDb;
