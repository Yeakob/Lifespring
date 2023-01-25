const BlogModel = require("../models/blogModel");

// create a blogs
const createblogs = async (req, res) => {
  const { title, description, blog_photo } = req.body;
  console.log(req.body);
  try {
    const user = req.user;
    const blog = await BlogModel.create({
      create_by: user._id,
      title,
      description,
      blog_photo,
    });
    res.status(200).json({
      blog,
      message: "Blog was inserted successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all blog

const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single blog
const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogModel.findById({ _id: id });
    if (!blog) {
      return res.status(400).json({ error: "Not such a Blog." });
    } else {
      res.status(200).json({
        blog,
        message: "Blog gets successfully!",
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a blog

const updateBlogs = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body?.title,
          description: req.body?.description,
          blog_photo: req.body?.blog_photo,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (!blog) {
      return res.status(400).json({ error: "Not such a Blogs." });
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a blog

const deleteBlogs = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogModel.findOneAndDelete({ _id: id });
    if (!blog) {
      return res.status(400).json({ error: "Not such a blog." });
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createblogs,
  getBlogs,
  getBlog,
  updateBlogs,
  deleteBlogs,
};
