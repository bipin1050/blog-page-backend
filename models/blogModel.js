const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  content:{
    type: [String],
    required: true,
  }
});

const blogModel = mongoose.model("blogModel", blogSchema);
module.exports = blogModel;
