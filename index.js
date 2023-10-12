const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    aidPath:
      "",
  });
});

app.post("/getcover", (req, res) => {
  const path = req.body.path;
  const regex = /aid=(\d*)/g;
  const match = regex.exec(path);
  const aid = match[1];
  const coverUrl = `https://api.szfx.top/bilibili/api.php?av=${aid}`;

  if (coverUrl) {
    fetch(coverUrl) // 发起请求
      .then((res) => res.json()) // 解析返回的 JSON 数据
      .then((data) => {
        console.log(data.cover); // 打印 cover 属性
        res.render("index.ejs", { aidPath: data.cover });
      })
      .catch((err) => console.error(err));
  }
});

// connection
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));