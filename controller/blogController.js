const blogModel = require("../models/blogModel");
const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// require("dotenv").config();
// const secretKey = "theToriApp";

module.exports.addblog = async function addblog(req, res) {
  try {
    // console.log(req.body)
    let {author, date, title, content} = req.body;
    if (author && date && title && content){
      let blog = await blogModel.create({ author, date, title, content });
      if (blog) {
        return res.status(200).json({
          message: "blog added successfully",
        });
      } else {
        res.status(400).json({
          message: "Error Adding blog",
        });
      }
    }else{
        return res.status(400).json({
          message: "Incomplete Blog Details",
        });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.viewblog = async function viewblog(req, res) {
  try {
      const blogList = await blogModel.find({ });
      if (blogList) {
        return res.status(200).json({
          blogList: blogList,
        });
      } else {
        return res.status(400).json({
          message: "No blogs found. Add some first",
        });
      }
    }
    catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.delblog = async function delblog(req, res) {
  try {
    await blogModel.findByIdAndDelete(req.body.delid);
    res.status(200).json({
      message: "Selected Task Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
