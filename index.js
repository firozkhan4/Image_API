import express from "express";
import morgan from "morgan";
import "dotenv/config.js"
import { fileURLToPath } from "url";
import path from "path"
import connectDB from "./config/dbConfig.js";

// Import Controllers
import handleUpload from "./controllers/uploadController.js"
import handleImages from "./controllers/imageController.js"

const PORT = process.env.PORT || 8000

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const connect = connectDB()

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(morgan("combined"));
app.use("/uploads", express.static("uploads"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname))
})
app.use("/upload", handleUpload);
app.use("/images", handleImages);

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT)
})

