const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  blog_photo: {
    type: String,
  },
});

module.exports = mongoose.model("Blogs", blogSchema);
