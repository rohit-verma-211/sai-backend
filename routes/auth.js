const express = require("express");
const Athlete = require("../models/Athlete");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// 🔹 Register API
router.post("/register", async (req, res) => {
  try {
    const { name, dob, gender, district, email, password } = req.body;

    // Check user exists
    const existingUser = await Athlete.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const athlete = new Athlete({ name, dob, gender, district, email, password });
    await athlete.save();

    res.json({ message: "Athlete registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Login API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const athlete = await Athlete.findOne({ email });
    if (!athlete) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, athlete.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // JWT token create
    const token = jwt.sign({ id: athlete._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Protected Route Example
router.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const athlete = await Athlete.findById(decoded.id).select("-password");

    res.json(athlete);
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;
