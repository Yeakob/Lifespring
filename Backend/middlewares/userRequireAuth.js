require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const userRequireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).send({ message: "Unauthorized User" });
  }

  if (authorization) {
    try {
      const token = authorization.split(" ")[1];
      const _id = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`);
      req.user = await UserModel.findById(_id).select("-password");
      next();
    } catch (error) {
      res.status(401).send({ message: "Unauthorized User" });
    }
  }
};

module.exports = userRequireAuth;
