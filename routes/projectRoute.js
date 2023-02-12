const express = require("express");

// router

const router = express.Router();

// routes

// GET all project
router.get("/", (req, res) => {
  res.json({ message: "Get all projects" });
});

//GET a single project

router.get("/:id", (req, res) => {
  res.json({ message: "Get a single  project" });
});

// post a new project

router.post("/", (req, res) => {
  res.json({ message: "Post a new project" });
});

// delete a  project

router.delete("/:id", (req, res) => {
  res.json({ message: "delete a  project" });
});

// update a new project

router.patch("/:id", (req, res) => {
  res.json({ message: "patch a  project" });
});

module.exports = router;
