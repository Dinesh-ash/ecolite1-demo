const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

// Register User
const registerUser = async (req, res) => {
  console.log("RegisterUser function called");
  try {
    //console.log("Request body:", req.body); // Log incoming data

    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      age: req.body.age,
      country: req.body.country,
      address: req.body.address,
      password: req.body.password, // Store plain-text password
    });

    //console.log("New user object created:", newUser);

    const user = await newUser.save();
    //console.log("User registered successfully:", user);
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate email
      console.error("Duplicate email error:", error.message);
      return res.status(400).json({ message: "Email already exists" });
    }
    console.error("Error during user registration:", error.message); // Log error details
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("User not found");
    }

    // Directly compare the plain-text passwords
    if (user.password !== req.body.password) {
      return res.status(401).json("Invalid credentials");
    }

    const { password, ...userDetails } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );

    res.status(200).json({ ...userDetails, accessToken });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerUser, loginUser };
