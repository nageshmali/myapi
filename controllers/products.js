const Product = require("../models/product")

const getAllProducts = async(req,res) => {

    const queryObject = {};

    const {company,name,price,featured,createdAt,rating,select} = req.query;

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = name;
    }

    if (price) {
        queryObject.price = price;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (createdAt) {
        queryObject.createdAt = createdAt;
    }
    if (rating) {
        queryObject.rating = rating;
    }

    let apiData = Product.find(queryObject);

    if(select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    const Products = await apiData;

    res.status(200).json({
        Products
    });
}




const getTestProducts = async(req,res) => {
    const queryObject = {};

    const {company,name,price,featured,createdAt,rating} = req.query;

    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = name;
    }

    if (price) {
        queryObject.price = price;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (createdAt) {
        queryObject.createdAt = createdAt;
    }
    if (rating) {
        queryObject.rating = rating;
    }

    const myData = await Product.find(queryObject);

    res.status(200).json({
        myData 
    });
}

module.exports = {getAllProducts,getTestProducts}