const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: String,
    comment: String,
    rating: Number
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
