const mongoose  = require("mongoose");


const connectDB = () => {
    console.log("DB connected");

    return mongoose.connect(process.env.MONGO_URI);
}

module.exports = connectDB;