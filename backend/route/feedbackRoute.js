const express = require("express");
const router = express.Router();
const FeedbackController = require("../controller/feedbackController");

router.post("/feedback", FeedbackController.createFeedback);
router.get("/feedback", FeedbackController.getFeedback);

module.exports = router;
