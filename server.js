require("dotenv").config();
const express = require("express");

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

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
