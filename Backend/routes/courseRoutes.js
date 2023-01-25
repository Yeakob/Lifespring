const express = require("express");
const {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/coursesController");
const validation = require("../middlewares/validationMiddleware");
const isPsychairtrist = require("../middlewares/isPsychairtrist");
const { coursesValidation } = require("../validation/coursesValidation");
const userRequireAuth = require("../middlewares/userRequireAuth");

// express router
const router = express();

router.post(
  "/",
  userRequireAuth,
  //   isPsychairtrist,
  validation(coursesValidation),
  createCourse
);
router.get("/", userRequireAuth, getCourses);
router.get("/:id", userRequireAuth, getCourse);
router.put(
  "/:id",
  userRequireAuth,
  validation(coursesValidation),
  updateCourse
);
router.delete("/:id", userRequireAuth, isPsychairtrist, deleteCourse);

module.exports = router;
