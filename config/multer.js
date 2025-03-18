import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";
import streamifier from "streamifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const storage = multer.memoryStorage();
const upload = multer({ storage });


const compressAndUpload = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const compressedImage = await sharp(req.file.buffer)
      .resize(800)
      .jpeg({ quality: 80 })
      .toBuffer();

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "uploads", format: "jpeg", public_id: `${req.file.originalname}-${Date.now()}` },
      (error, result) => {
        if (error) return next(error);
        req.file.cloudinaryUrl = result.secure_url;
        req.file.public_id = result.public_id;
        next();
      }
    );

    streamifier.createReadStream(compressedImage).pipe(uploadStream);
  } catch (error) {
    next(error);
  }
};

export { upload, compressAndUpload };

