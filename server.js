require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("../backend/routes/projectRoute");
const userRoutes = require("../backend/routes/userRoute");
// express app
const app = express();

//listen for request

const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use("/api/projects/", projectRoutes);

app.use("/api/user", userRoutes);

// mongodb
mongoose.set("strictQuery", false);
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
