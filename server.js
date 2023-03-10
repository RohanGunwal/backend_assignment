const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1/", routes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {}, () => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}`);
  });
});
