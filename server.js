const express = require("express");
const app = express();

let port = 5000;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
