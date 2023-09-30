const express = require("express");
const app = express();

const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
  res.send("HEllo");
});

app.listen(PORT, () => {
  return console.log("Server up and running on port: ", PORT);
});
