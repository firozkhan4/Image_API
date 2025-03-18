import express from "express";
import morgan from "morgan";
import "dotenv/config.js"
import connectDB from "./config/dbConfig.js";

// Import Controllers
import handleUpload from "./controllers/uploadController.js"
import handleImages from "./controllers/imageController.js"

const PORT = process.env.PORT || 8000

const app = express()
const connect = connectDB()

// Middlewares
app.use(express.json());
app.use(morgan("combined"));
app.use("/uploads", express.static("uploads"))

app.use("/upload", handleUpload);
app.use("/images", handleImages);

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT)
})

