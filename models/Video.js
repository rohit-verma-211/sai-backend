const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  athlete: { type: mongoose.Schema.Types.ObjectId, ref: "Athlete", required: true },
  title: { type: String, required: true },
  url: { type: String, required: true }, // Video ka link (Cloudinary/Local path)
}, { timestamps: true });

module.exports = mongoose.model("Video", videoSchema);
