const yup = require("yup");

// signup user validation
const userSignupValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  mobile: yup.string().required(),
});

// login user validation
const userLoginValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

// user update validation
// const userUpdateValidation = yup.object({
//   name: yup.string(),
//   email: yup.string().email(),
//   mobile: yup.string(),
//   about: yup.string().max(100),
// });

// change password validation
// const passwordValidation = yup.object({
//   password: yup.string().min(6).max(10).required(),
// });

module.exports = {
  userSignupValidation,
  userLoginValidation,
  // userUpdateValidation,
  // passwordValidation,
};
