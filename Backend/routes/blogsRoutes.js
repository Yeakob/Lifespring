const express = require("express");
const {
  createblogs,
  getBlogs,
  getBlog,
  updateBlogs,
  deleteBlogs,
} = require("../controllers/blogsController");
const validation = require("../middlewares/validationMiddleware");
const isPsychairtrist = require("../middlewares/isPsychairtrist");
const { blogValidation } = require("../validation/blogValidation");
const userRequireAuth = require("../middlewares/userRequireAuth");

// express router
const router = express();

router.post(
  "/",
  userRequireAuth,
  //   isPsychairtrist,
  validation(blogValidation),
  createblogs
);
router.get("/", userRequireAuth, getBlogs);
router.get("/:id", userRequireAuth, getBlog);
router.put("/:id", userRequireAuth, validation(blogValidation), updateBlogs);
router.delete("/:id", userRequireAuth, deleteBlogs);

module.exports = router;
