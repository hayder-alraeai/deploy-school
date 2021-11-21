const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "new test",
  });
});
app.get("/test", (req, res) => {
  res.send("hello doqi test");
});

app.listen(3004, () => {
  console.log("app listning on port 3004");
});
