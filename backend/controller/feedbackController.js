const Feedback = require("../model/feedbackModel");

// CREATE FEEDBACK
exports.createFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // already submitted
    const existing = await Feedback.findOne({ email });

    if (existing) {
      return res.json({
        success: false,
        message: "You have already submitted feedback.",
      });
    }

    await Feedback.create({
      name,
      email,
      message,
    });

    res.json({
      success: true,
      message: "Feedback submitted successfully!",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// GET ALL FEEDBACK
exports.getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ _id: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.json([]);
  }
};
// DELETE FEEDBACK
exports.deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Feedback deleted successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Delete failed",
    });
  }
};
