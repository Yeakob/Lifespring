const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  create_by: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  course_type: {
    type: String,
  },
  videos: {
    type: Array,
    default: undefined,
  },
  cover_photo: {
    type: String,
  },
});

module.exports = mongoose.model("Courses", coursesSchema);
