require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SSLCommerzPayment = require("sslcommerz");
const urlencoded = require("body-parser");
const json = require("body-parser");
const response = require("express");
const SSLCommerzPayment = require("sslcommerz");
const urlencoded = require("body-parser");
const json = require("body-parser");
const response = require("express");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const professionalsRoutes = require("./routes/professionalsRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const sslCommerzRoutes = require("./routes/sslCommerzRoutes");

// express app
const app = express();
app.use(express.json());

// app.use(json());
// app.use(urlencoded({
//   extended: false
// }));
app.use("/api/payment", sslCommerzRoutes);

// middleware
try {
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb" }));
} catch (error) {
  console.log(error);
}

// route
app.get("/", (req, res) => {
  res.status(200).json({ api: "Life Spring Clone API 🌳" });
});

// routes for user
app.use("/api/auth", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/professionals", professionalsRoutes);
app.use("/api/user/profile", userProfileRoutes);
app.use("/api/professionals", professionalsRoutes);
app.use("/api/user/profile", userProfileRoutes);

// connect to DB
mongoose.set("strictQuery", true);
mongoose.set("strictQuery", true);

try {
  mongoose.connect(`${process.env.MONGO_DB_URL}`);
} catch (error) {
  console.log(error);
}
app.listen(4000 || process.env.PORT, () => {
  console.log("I on listen for port 4000 😎");
});
