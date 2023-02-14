const express = require("express");
const {
  postProject,
  getAllProject,
  getSingleProject,
} = require("../controllers/projectController");
const Project = require("../models/projectModel");
// const postProject = require("../controllers/projectController");
// router

const router = express.Router();

// routes

// GET all project
router.get("/", getAllProject);

//GET a single project

router.get("/:id", getSingleProject);

// post a new project

router.post("/", postProject);

// delete a  project

router.delete("/:id", (req, res) => {
  res.json({ message: "delete a  project" });
});

// update a new project

router.patch("/:id", (req, res) => {
  res.json({ message: "patch a  project" });
});

module.exports = router;
