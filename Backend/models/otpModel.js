const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optSchema = new Schema({
  email: {
    type: String,
  },
  code: {
    type: String,
  },
  expireIn: {
    type: Number,
  },
});

module.exports = mongoose.model("otp", optSchema);
