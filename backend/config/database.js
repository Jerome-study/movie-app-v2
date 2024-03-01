const mongoose = require("mongoose");
const connectionString = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(connectionString);
      console.log("Connected to database");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

connectDB();