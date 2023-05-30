var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.listen(8080);
var server = http.createServer(app);

app.use(express.static(path.join(__dirname-"/node.js", "/public")));
