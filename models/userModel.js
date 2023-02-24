const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signUp = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  //check if email is valid
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  // lowercase,uppercase,number,symbol,8+ chars

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Please make sure your password is at least 8 characters long and includes at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
  }

  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email Already used");
  }

  // encrypt password or hashing
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  // crate an user
  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
