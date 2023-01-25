const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professionalsSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  profile_photo: {
    type: String,
  },
});

module.exports = mongoose.model("Professionals", professionalsSchema);
