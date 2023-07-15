const express = require("express");
const server = express();

server.listen(1144);

const cors = require("./middleware/cors.middleware");
const bodyparser = require("./middleware/bodyparser.middleware");
const multer = require("./middleware/multer.middleware");

// middleware 
server.use(cors);
server.use(bodyparser.urlencoder);
server.use(bodyparser.jsonencoder);
server.use(multer);

//require routing files
const blogRouting = require("./routing/blog.routing");


// middleware route

server.use("/blog",blogRouting);