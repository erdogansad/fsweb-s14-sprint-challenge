const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { errHandler } = require("./server-middleware.js");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("combined"));
server.set("json spaces", 2);

server.use(errHandler);

module.exports = server;
