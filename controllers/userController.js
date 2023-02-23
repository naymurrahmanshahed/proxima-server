//login user

const loginUser = async (req, res) => {
  res.json({ massage: "login" });
};

//login user

const signUpUser = async (req, res) => {
  res.json({ massage: "signup" });
};

module.exports = {
  loginUser,
  signUpUser,
};
