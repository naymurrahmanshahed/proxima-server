const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

// helping function for token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "7d" });
};

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//signup user

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // create user
    const user = await User.signUp(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
