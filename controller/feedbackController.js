const Feedback = require("../model/feedbackModel");

const createFeedback = async (req, res) => {
    const { name, comment, rating } = req.body;
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }

    const feedback = new Feedback({ name, comment, rating });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted", feedback });
};

const getFeedback = async (req, res) => {
    const feedback = await Feedback.find();
    res.json(feedback);
};

module.exports = { createFeedback, getFeedback };
