const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    country: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true }, // Store plain-text password (not secure)
    status: { type: Number, default: 0 },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
