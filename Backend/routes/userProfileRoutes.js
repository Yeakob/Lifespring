const express = require("express");
const { userProfile, updateUser } = require("../controllers/userController");
const userRequireAuth = require("../middlewares/userRequireAuth");

// express router
const userProfileRoutes = express();

userProfileRoutes.use(userRequireAuth);

// // get user
userProfileRoutes.get("/", userProfile);
// update user
userProfileRoutes.put("/", updateUser);

// export modules
module.exports = userProfileRoutes;
