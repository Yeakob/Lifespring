const CoursesModel = require("../models/coursesModel");

// create a course
const createCourse = async (req, res) => {
  const {
    title,
    description,
    duration,
    course_type,
    videos,
    price,
    cover_photo,
  } = req.body;
  console.log(req.body);
  try {
    const user = req.user;
    const course = await CoursesModel.create({
      create_by: user._id,
      title,
      description,
      duration,
      course_type,
      videos,
      price,
      cover_photo,
    });
    res.status(200).json({
      course,
      message: "Course was inserted successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await CoursesModel.find({});
    res.status(200).json({ courses });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a course
const getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await CoursesModel.findById({ _id: id });
    if (!course) {
      return res.status(400).json({ error: "Not such a Course." });
    } else {
      res.status(200).json(course);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a course
const updateCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await CoursesModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          create_by: req.body?.create_by,
          title: req.body?.title,
          description: req.body?.description,
          duration: req.body?.duration,
          course_type: req.body?.course_type,
          videos: req.body?.videos,
          price: req.body?.price,
          cover_photo: req.body?.cover_photo,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (!course) {
      return res.status(400).json({ error: "Not such a Course." });
    } else {
      res.status(200).json(course);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Course
const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await CoursesModel.findOneAndDelete({ _id: id });
    if (!course) {
      return res.status(400).json({ error: "Not such a Course." });
    } else {
      res.status(200).json(course);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
