import mongoose from "mongoose";


const connectDB = async () => {
  const uri = process.env.MONGODB_URI
  const dbName = process.env.MONGODB_DBNAME

  try {
    const connect = await mongoose.connect(uri, {
      dbName,
    });

    console.log(`Connected to MongoDB: ${dbName} successfully!`);
    return connect;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

