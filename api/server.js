const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const projects = require("./project/router.js");
const resources = require("./resource/router.js");
const tasks = require("./task/router.js");

const { errHandler } = require("./server-middleware.js");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("combined"));
server.set("json spaces", 2);

server.use("/api/projects", projects);
server.use("/api/resources", resources);
server.use("/api/tasks", tasks);

server.use(errHandler);

module.exports = server;
