import mongoose from "mongoose";

mongoose.set("strictQuery", false); // To suppress deprecation warning

async function connectMongoDB() {
  const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err; // rethrow so caller can decide what to do
  }
}

export { connectMongoDB }; 
