const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  first: {
    type: String,
  },
  last: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  mobile: {
    type: Number,
    require: true,
  },
  bio: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  printerest: {
    type: String,
  },
  youtube: {
    type: String,
  },
  github: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
});

// statics singup method
userSchema.statics.signup = async function (
  email,
  password,
  name,
  mobile,
  role
) {
  const exists = await this.findOne({ email });

  if (!email || !password || !name || !mobile) {
    throw Error("Filed are required");
  }

  // check the email is exists or not
  if (exists) {
    throw Error("Email already in use");
  }

  // random password generate & add hash in the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create a user with name, email, password
  const user = await this.create({
    email,
    password: hash,
    name,
    mobile,
    role,
  });

  return user;
};

// statics login
userSchema.statics.login = async function (email, password) {
  // Input fields check
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid Action");
  }

  // compare the password
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid Action");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
