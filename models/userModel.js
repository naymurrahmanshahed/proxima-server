const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
