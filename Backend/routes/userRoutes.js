const express = require("express");
const {
  signupUser,
  loginUser,
  emailSend,
  changePassword,
} = require("../controllers/userController");

// const validation = require("../middlewares/validationMiddleware");
// const {
//   userSignupValidation,
//   userLoginValidation,
// } = require("../validation/userValidation");

// express router
const router = express();

// signup user
router.post("/signup", signupUser);

// signup user
// router.post("/signup", validation(userSignupValidation), signupUSer);

// login user
router.post("/login", loginUser);

router.post("/email-send", emailSend);

router.post("/change-password", changePassword);

// export modules
module.exports = router;
