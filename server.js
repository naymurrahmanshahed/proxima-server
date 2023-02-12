require("dotenv").config();
const express = require("express");

// express app
const app = express();

//listen for request

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
