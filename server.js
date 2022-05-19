const express = require("express");
const app = express();
const allroutes = require("./routes/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let port = 5000;

let StartServer = async () => {
  app.use("/vrpuram", allroutes);

  app.listen(port, () => {
    console.log(`port is running on ${port}`);
  });
};
// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//db connection start
let dbconnection = async () => {
  await mongoose.connect("mongodb://localhost:27017/vrpuram");
  console.log("database is connected");
};
dbconnection();
StartServer();
