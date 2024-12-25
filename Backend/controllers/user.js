const User = require("../models/User");

//DELETING USER

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("The user has deleted successfully");
  } catch (error) {
    req.status(500).json(error);
  }
};

//GET ALL USERS

const getAllUsers = async (req, res) => {
  try {
    //console.log("Fetching users...");
    const users = await User.find().sort({ createdAt: -1 });
    //console.log("Fetched users:", users);

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};


module.exports ={getAllUsers , deleteUser}