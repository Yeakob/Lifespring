const yup = require("yup");

// profile validation
const blogValidation = yup.object({
  title: yup.string(),
  description: yup.string(),
});

module.exports = {
  blogValidation,
};
