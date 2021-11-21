const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello doqi");
});

app.listen(3004, () => {
  console.log("app listning on port 3004");
});
