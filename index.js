const express = require("express");
const app = express();
const fs = require("fs");
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  const rs = fs.createReadStream("video.mp4");
  rs.pipe(res);
});

app.listen(3000, () => {
  console.log("the sever is listening");
});
