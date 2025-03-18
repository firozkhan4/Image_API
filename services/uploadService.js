import imageModel from "../models/imageModel.js";

export const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const image = new imageModel({
    filename: req.file.public_id,
    url: req.file.cloudinaryUrl,
  });

  try {
    const newImage = await image.save();
    res.json({
      message: "File uploaded successfully",
      newImage
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

