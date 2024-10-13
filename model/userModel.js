const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from both ends of a string
      minlength: 2, // Ensures the name has at least 2 characters
    },
    email: {
      type: String,
      required: true,
      unique: true, // Makes sure each email is unique
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation regex
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt timestamps automatically

const User = mongoose.model("User", userSchema);

module.exports = User;
