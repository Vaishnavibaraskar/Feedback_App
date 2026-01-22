/*const express = require("express");
const cors = require("cors");
const feedbackRoutes = require("./route/feedbackRoute");
const dbConnect = require("./config/database");

const app = express();
app.use(cors()); 
app.use(express.json());

dbConnect();

app.use("/api", feedbackRoutes);

app.get("/", (req, res) => {
    res.send("Welcome...");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});*/
const express = require("express");
const cors = require("cors");
const feedbackRoutes = require("./route/feedbackRoute");
const dbConnect = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api", feedbackRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

