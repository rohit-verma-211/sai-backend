const express = require("express");
const Performance = require("../models/Performance");

const router = express.Router();

// Leaderboard API
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Performance.aggregate([
      {
        $group: {
          _id: "$athlete",
          totalScore: { $sum: "$score" }
        }
      },
      { $sort: { totalScore: -1 } },
      { $limit: 10 } // top 10
    ]);

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
