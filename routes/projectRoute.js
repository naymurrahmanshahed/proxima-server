const express = require("express");
const {
  postProject,
  getAllProject,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const Project = require("../models/projectModel");
const requireAuth = require("../middlewares/requireAuth");

// router

const router = express.Router();

router.use(requireAuth);

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
