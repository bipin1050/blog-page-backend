const express = require("express");
const blogRouter = express.Router();

const { addblog, viewblog, delblog } = require("../controller/blogController");


blogRouter.route("/viewblog").get(viewblog);
blogRouter.route("/addblog").post(addblog);
blogRouter.route("/delblog").post(delblog);


module.exports = blogRouter;
