const User = require("../models/userModel");

//login user

const loginUser = async (req, res) => {
  res.json({ massage: "login" });
};

//login user

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signUp(email, password);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
