const express = require("express");
const path = require("path");
const fs = require("fs");

const staticPath = path.join(__dirname, "static"); //путь для стат. файлов

const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => res.sendFile(path.join(staticPath, "index.html"))); //главная страница

app.get("/about", (req, res) =>
  res.sendFile(path.join(staticPath, "about.html"))
);

app.get("/news", (req, res) =>
  res.sendFile(path.join(staticPath, "news.html"))
);

app.get("/school", (req, res) =>
  res.sendFile(path.join(staticPath, "school.html"))
);

app.get("/news/file", (req, res) => //запись в файл
  fs.writeFile(
    "file.txt",
    "Пользователь записан!",
    (err) => err && console.error(err)
  )
);

app.listen(8000); //порт для сервера сайта
