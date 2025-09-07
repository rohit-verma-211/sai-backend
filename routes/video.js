const express = require("express");
const Video = require("../models/Video");
const auth = require("../middleware/auth");

const router = express.Router();

// Upload video
router.post("/upload", auth, async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ error: "Title and URL required" });
    }

    const video = new Video({
      athlete: req.user.id,
      title,
      url
    });

    await video.save();
    res.json({ message: "Video uploaded successfully", video });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all videos of athlete
router.get("/", auth, async (req, res) => {
  try {
    const videos = await Video.find({ athlete: req.user.id });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
