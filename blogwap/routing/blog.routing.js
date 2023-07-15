const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

router.get("/",(request,response)=>{
  response.send("Get request");
});

router.post("/",(request,response)=>{
  blogController.createBlog(request,response);
});

router.put("/",(request,response)=>{
  response.send("Put request");
});

router.delete("/",(request,response)=>{
  response.send("Delete request");
});


module.exports = router;
