const yup = require("yup");

// course validation
const coursesValidation = yup.object({
  title: yup.string(),
  description: yup.string(),
  duration: yup.number(),
  course_type: yup.string(),
  videos: yup.string(),
  price: yup.number(),
  cover_photo: yup.string(),
});

module.exports = {
  coursesValidation,
};
