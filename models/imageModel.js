import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  uploadAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("URL", imageSchema);

