const express = require("express");
const router = express.Router();

const {getAllProducts,getTestProducts} = require('../controllers/products')

router.route("/").get(getAllProducts);
router.route("/testing").get(getTestProducts);


module.exports = router;