const mongoose  = require("mongoose");


const connectDB = (url) => {
    console.log("DB connected");
    return mongoose.connect(url);
}

module.exports = connectDB;