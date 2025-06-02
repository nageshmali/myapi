require("dotenv").config();

const mongoose  = require("mongoose");


const connectDB = () => {
    console.log("DB connected");
    console.log("MONGO_URI:", process.env.MONGODB_URL);
    return mongoose.connect(process.env.MONGODB_URL);
    

}

module.exports = connectDB;