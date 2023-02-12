require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("../backend/routes/projectRoute");
// express app
const app = express();

//listen for request

const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use("/api/projects/", projectRoutes);

// mongodb
mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => {
    //listen for request
    app.listen(PORT, () => {
      console.log(` conecting to mongoose Listening port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
