require("dotenv").config();
const express = require('express')
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;

const prod_routes = require("./routes/products")

app.get("/",(req,res)=>{
    res.send("Hello I am home page");
})

//middleware to set up routes
app.use("/api/products",prod_routes);

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes i am connected`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();