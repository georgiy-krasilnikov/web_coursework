const express = require("express");
const path = require("path");

const staticPath = path.join(__dirname, "static");

const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => res.sendFile(path.join(staticPath, "index.html")));

app.get("/about", (req, res) =>
  res.sendFile(path.join(staticPath, "about.html"))
);

app.get("/news", (req, res) =>
  res.sendFile(path.join(staticPath, "news.html"))
);

app.get("/school", (req, res) => {
  res.sendFile(path.join(staticPath, "school.html"));
});

app.listen(8000);
