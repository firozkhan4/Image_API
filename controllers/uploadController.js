import express from "express"
import { upload, compressAndUpload } from "../config/multer.js"
import { uploadImage } from "../services/uploadService.js"

const route = express.Router()

route.post("/", upload.single("file"), compressAndUpload, uploadImage)

export default route
