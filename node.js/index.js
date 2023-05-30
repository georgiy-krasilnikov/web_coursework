const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/front-end/index.html")
    .then((contents) => {
      if (req.url.endsWith(".css")) contentType = "text/css";
      if (req.url.endsWith(".js")) contentType = "text/javascript";
      if (req.url.endsWith(".png")) contentType = "image/png";
      if (req.url.endsWith(".png")) contentType = "image/jpg";
      res.setHeader("Content-Type", contentType);
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
