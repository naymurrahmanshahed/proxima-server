const mongoose = require("mongoose");
const Project = require("../models/projectModel");

// get all projects

const getAllProject = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 }); //descending order
  res.status(200).json(projects);
};

//get a single project
const getSingleProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Id Found" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No Project Found" });
  }

  res.status(200).json(project);
};

//post a new project
const postProject = async (req, res) => {
  const { title, tech, duration, budget, manager, dev } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!duration) {
    emptyFields.push("duration");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!manager) {
    emptyFields.push("manager");
  }

  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all field", emptyFields });
  }

  try {
    const project = await Project.create({
      ...req.body,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a project

const updateProject = async (req, res) => {
  const { id } = req.params;

  const { title, tech, duration, budget, manager, dev } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!duration) {
    emptyFields.push("duration");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!manager) {
    emptyFields.push("manager");
  }

  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all field", emptyFields });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Id Found" });
  }
  const project = await Project.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!project) {
    return res.status(404).json({ error: "No Project found" });
  }
  res.status(200).json(project);
};

//delete a project

const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Id Found" });
  }
  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(404).json({ error: "No Project found" });
  }
  res.status(200).json(project);
};

module.exports = {
  postProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
