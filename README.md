# 📸 Image Upload & Storage API  

A backend service that allows users to **upload, retrieve, and delete images**. The API supports **image compression**, **secure storage**, and **metadata tracking**.  

---

## 🚀 Features  
✅ Upload images & get a unique URL  
✅ Retrieve images using a unique ID  
✅ Delete images from storage & database  
✅ Supports **JPG, PNG, and JPEG** formats  
✅ Image compression using **Sharp**  
✅ Stores metadata (filename, URL, upload date) in **MongoDB**  
✅ Secure error handling & validation  
✅ Deployable on **Render / Vercel / AWS**  

---

## 🛠 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **File Upload Library:** Multer  
- **Storage:** Cloudinary (or Local File System)  
- **Image Processing:** Sharp  
- **Deployment:** Render / Vercel / AWS  

---

## 📌 API Endpoints  

### **1️⃣ Upload Image**  
**POST** `/upload`  
- Uploads an image and returns a unique URL.  
- **Request:**  
  - `image` (File, Required) – Accepts `.jpg`, `.png`, `.jpeg`  
  - `profile_picture` (Boolean, Optional) – If `true`, marks the image as a profile picture.  
- **Response:**  
  ```json
  {
    "message": "Image uploaded successfully!",
    "image": {
      "id": "65fa123b6c3a9c0012345678",
      "url": "https://res.cloudinary.com/demo/image/upload/v1710123456/sample.jpg"
    }
  }
  ```  

### **2️⃣ Get Image by ID**  
**GET** `/images/:id`  
- Fetches an image using its unique ID.  
- **Response:**  
  ```json
  {
    "id": "65fa123b6c3a9c0012345678",
    "url": "https://res.cloudinary.com/demo/image/upload/v1710123456/sample.jpg",
    "uploadDate": "2025-03-18T12:00:00.000Z"
  }
  ```  

### **3️⃣ Delete Image**  
**DELETE** `/images/:id`  
- Deletes an image from storage and database.  
- **Response:**  
  ```json
  {
    "message": "Image deleted successfully."
  }
  ```  

---

## 🛠 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/firozkhan4/Image_API.git
cd Image_API
npm install
npm run dev
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the project root and add the following:  
```env
PORT=5000
MONGODB_DBNAME=imageDB
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### **4️⃣ Run the Server**  
```sh
npm run dev
```
The server will start at `http://localhost:5000`

---

## 🌍 Deployment  
You can deploy the API on **Render / Vercel / AWS** by following these steps:  
1️⃣ Push the code to a GitHub repository.  
2️⃣ Link the repository to your preferred deployment platform.  
3️⃣ Set the environment variables in the deployment settings.  
4️⃣ Deploy and get a **Live API URL**!  

---

## 📂 Additional Resources  
📌 **GitHub Repo:** https://github.com/firozkhan4/Image_API 
🌍 **Live API URL:** https://image-api-8lhf.onrender.com/  
📌 **Postman Collection:** https://assignment-1391.postman.co/workspace/Assignment-Workspace~b9deba51-cc40-45cd-aa86-642ecdedcfaa/collection/33507690-86071f59-23ba-49ee-90a6-0595793951f3?action=share&creator=33507690 

---

## 🤝 Contributing  
Feel free to fork this repo, raise issues, or submit PRs to improve the project. 🚀  

---

## 📜 License  
This project is licensed under **MIT License**.  

---
