const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    tech: {
      type: String,
      require: true,
    },
    budget: {
      type: Number,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    manager: {
      type: String,
      require: true,
    },
    dev: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
