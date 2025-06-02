const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    console.log("MONGO_URI:", uri); // Should show full URI
    if (!uri) {
        throw new Error("MONGO_URI is undefined");
    }

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected!");
    } catch (err) {
        console.error("❌ Connection error:", err.message);
        throw err;
    }
};

module.exports = connectDB;
