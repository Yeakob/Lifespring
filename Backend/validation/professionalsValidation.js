const yup = require("yup");

// profile validation
const professionlasValidation = yup.object({
  name: yup.string(),
  category: yup.string(),
  profile_photo: yup.string(),
});

module.exports = {
     professionlasValidation,
};
