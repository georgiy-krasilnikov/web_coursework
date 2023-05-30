"use strict";

var http = require("http");

var fs = require("fs").promises;

var host = "localhost";
var port = 8000;

var requestListener = function requestListener(req, res) {
  fs.readFile(__dirname + "/front-end/index.html").then(function (contents) {
    if (req.url.endsWith(".css")) contentType = "text/css";
    if (req.url.endsWith(".js")) contentType = "text/javascript";
    if (req.url.endsWith(".png")) contentType = "image/png";
    if (req.url.endsWith(".png")) contentType = "image/jpg";
    res.setHeader("Content-Type", contentType);
    res.writeHead(200);
    res.end(contents);
  })["catch"](function (err) {
    res.writeHead(500);
    res.end(err);
    return;
  });
};

var server = http.createServer(requestListener);
server.listen(port, host, function () {
  console.log("Server is running on http://".concat(host, ":").concat(port));
});