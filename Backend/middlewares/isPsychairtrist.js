require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const isPsychairtrist = async (req, res, next) => {
  console.log(req.user.role);

  if (!req.user.isPsychiatrist) {
    res.status(401).send({ message: "User is not Admin" });
  } else {
    next();
  }
};

module.exports = isPsychairtrist;
