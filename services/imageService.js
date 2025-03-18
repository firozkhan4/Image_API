import imageRepo from "../models/imageModel.js"
import { v2 as cloudinary } from "cloudinary";
const getByID = async (id) => {
  try {
    const image = await imageRepo.findById(id);
    if (!image) {
      throw new Error(`Image not found by id: ${id}`);
    }
    return image;
  } catch (error) {
    throw new Error(`Error retrieving image by id: ${id}, ${error.message}`);
  }
};

const deleteByID = async (id) => {
  try {
    const image = await imageRepo.findById(id);
    const res = await cloudinary.uploader.destroy(image.filename)

    if (!res) {
      throw new Error(`Image not found by id: ${id}`)
    }

    const deletedImage = await imageRepo.findByIdAndDelete(id);
    if (!deletedImage) {
      throw new Error(`Image not found by id: ${id}`);
    }
  } catch (error) {
    throw new Error(`Error deleting image by id: ${id}, ${error.message}`);
  }
};

export {
  getByID,
  deleteByID
}
