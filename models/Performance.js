const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  athlete: { type: mongoose.Schema.Types.ObjectId, ref: "Athlete", required: true },
  score: { type: Number, required: true },
  event: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Performance", performanceSchema);
