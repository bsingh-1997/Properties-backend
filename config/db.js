
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Mongodb connected");
  } catch (error) {
    console.error("mongodb connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
