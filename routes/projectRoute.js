const express = require("express");
const {
  postProject,
  getAllProject,
  getSingleProject,
  deleteProject,
  updateProject,
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

router.delete("/:id", deleteProject);

// update a new project

router.patch("/:id", updateProject);

module.exports = router;
