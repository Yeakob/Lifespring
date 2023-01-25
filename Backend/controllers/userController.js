const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");
const OtpModel = require("../models/otpModel");

// create token
const createToken = (_id) => {
  return jwt.sign({ _id }, `${process.env.ACCESS_TOKEN_SECRET}`, {
    expiresIn: "3d",
  });
};

// secure password method
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// signup controller
const signupUser = async (req, res) => {
  // get info from body/user
  const { email, password, name, mobile, role } = req.body;

  // console.log(req.body);
  try {
    const user = await UserModel.signup(email, password, name, mobile);
    const token = createToken(user._id);
    const role = user.role;

    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    const role = user.role;

    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const userProfile = async (req, res) => {
//   try {
//     const user_id = req.user;
//     const userProfile = await UserModel.findById(user_id).select("-password");
//     res.status(200).json(userProfile);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const userProfile = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await UserModel.findById({ _id: id });
    if (!user) {
      return res.status(400).json({ error: "Not such a User." });
    } else {
      res.status(200).json({
        user,
        message: "user gets successfully!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// update user info
const updateUser = async (req, res) => {
  const user_id = req.user;
  const {
    email,
    name,
    first,
    last,
    jobTitle,
    bio,
    mobile,
    facebook,
    twitter,
    instagram,
    printerest,
    youtube,
    github,
    image,
  } = req.body;

  const responseType = {};
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: user_id },
      {
        first,
        last,
        jobTitle,
        bio,
        mobile,
        facebook,
        twitter,
        instagram,
        printerest,
        youtube,
        github,
        image,
      },
      {
        returnOriginal: false,
      }
    ).select("-password");
    res.status(200).json(user);
    // responseType.statusText = "Success";
    // responseType.message = "Please check your mail";
  } catch (error) {
    res.status(400).json({ error: error.message });
    // responseType.statusText = "Error";
    // responseType.message = "Email is not exists";
  }
};

// email send
const emailSend = async (req, res) => {
  const data = await UserModel.findOne({ email: req.body.email });
  console.log(data);
  const responseType = {};
  if (data) {
    let otpcode = Math.floor(Math.random() * 10000 + 1);
    let otpData = new OtpModel({
      email: req.body.email,
      code: otpcode,
      expiresIn: new Date().getTime() + 300 * 1000,
    });
    let otpResponse = await otpData.save();
    responseType.statusText = "Success";
    responseType.message = "Please check your mail";
  } else {
    responseType.statusText = "Error";
    responseType.message = "Email is not exists";
  }
  res.status(200).json(responseType);
};

// change password
const changePassword = async (req, res) => {
  let data = await OtpModel.find({
    email: req.body.email,
    code: req.body.otpcode,
  });
  const response = {};

  if (data) {
    let currentTime = new Date().getTime();
    let diff = data.expiresIn - currentTime;

    if (diff < 0) {
      response.message = "Token Expire";
      response.statusText = "Error";
    } else {
      let user = await UserModel.findOne({ email: req.body.email });
      user.password = req.body.password;
      user.save();
      response.message = "Password Changes successfully";
      response.statusText = "Success";
    }
  } else {
    response.message = "Invalid Otp";
    response.statusText = "Error";
  }
  res.status(200).json(response);
};

// Email formate
const mailer = (email, otp) => {
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "mostafizur15-10681@diu.edu.bd",
      pass: "9898998",
    },
  });

  var mailOptions = {
    from: "mostafizur15-10681@diu.edu.bd",
    to: "sourav10681@gmail.com",
    subject: "Change Password",
    text: "Thank you sir",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
  });
};
// export modules
module.exports = {
  signupUser,
  loginUser,
  userProfile,
  updateUser,
  emailSend,
  changePassword,
};
