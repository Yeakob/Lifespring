const ProfessionalsModel = require("../models/professionalsModel");

// create a Professionals
const createProfessionals = async (req, res) => {
  const {
    name,
    category,
    profile_photo,
  } = req.body;
  console.log(req.body);
  try {
    const user = req.user;
    const professional = await ProfessionalsModel.create({
      create_by: user._id,
    name,
    category,
    profile_photo,
    });
    res.status(200).json({
     professional,
      message: "Professional was inserted successfully!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a Professionals
const getProfessional = async (req, res) => {
  const { id } = req.params;
  try {
    const professional = await ProfessionalsModel.findById({ _id: id });
    if (!professional) {
      return res.status(400).json({ error: "Not such a professional." });
    } else {
      res.status(200).json(professional);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all professionals

const getProfessionals = async (req, res) => {
  try {
    const professional = await ProfessionalsModel.find({});
    res.status(200).json({ professional });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// update a professionals

const updateProfessionals = async (req, res) => {
  const { id } = req.params;
  try {
    const professional = await ProfessionalsModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body?.name,
          category: req.body?.category,
          profile_photo: req.body?.profile_photo,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    if (!professional) {
      return res.status(400).json({ error: "Not such a Professionals." });
    } else {
      res.status(200).json(professional);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Professionals

const deleteProfessionals = async (req, res) => {
  const { id } = req.params;
  try {
    const professional = await ProfessionalsModel.findOneAndDelete({ _id: id });
    if (!professional) {
      return res.status(400).json({ error: "Not such a professional." });
    } else {
      res.status(200).json(professional);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProfessionals,
  getProfessionals,
  getProfessional,
  updateProfessionals,
  deleteProfessionals,
};
