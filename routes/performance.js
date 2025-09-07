const express = require("express");
const Performance = require("../models/Performance");
const auth = require("../middleware/auth");

const router = express.Router();

// Add performance
router.post("/add", auth, async (req, res) => {
  try {
    const { score, event } = req.body;
    if (!score || !event) {
      return res.status(400).json({ error: "Score and Event required" });
    }

    const perf = new Performance({
      athlete: req.user.id,
      score,
      event
    });

    await perf.save();
    res.json({ message: "Performance added", perf });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get performance of logged-in athlete
router.get("/", auth, async (req, res) => {
  try {
    const performances = await Performance.find({ athlete: req.user.id });
    res.json(performances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
