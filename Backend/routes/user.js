const express = require("express");
const { deleteUser, getAllUsers } = require("../controllers/user");
const User = require("../models/User");
const router = express.Router();

// Route to register a new user
router.post("/", async (req, res) => {
    try {
      const { fullname, email, age, country, address, password } = req.body;
      const newUser = new User({ fullname, email, age, country, address, password });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: "Error saving user" });
    }
  });

// DELETING USER

router.delete("/:id", deleteUser);

//GET ALL USERS

router.get("/", getAllUsers);
module.exports = router;
