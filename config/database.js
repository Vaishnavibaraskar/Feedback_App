const mongoose = require("mongoose");

const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/feedbackDB");
    console.log("Connected to MongoDB!");
};

module.exports = dbConnect;
