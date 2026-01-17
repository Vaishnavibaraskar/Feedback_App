const express = require("express");
const feedbackRoutes = require("./route/feedbackRoute");
const dbConnect = require("./config/database");

const app = express();
app.use(express.json());

dbConnect();

app.use("/api", feedbackRoutes);

app.get("/", (req, res) => {
    res.send("Welcome...");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
