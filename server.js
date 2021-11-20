const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Welome to Water Quality" });
});

app.use("/", routes);

module.exports = app;
