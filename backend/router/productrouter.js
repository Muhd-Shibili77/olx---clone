const express = require("express");
const router = express.Router();
const productController = require('../controller/productcontroller')

router.get("/get", productController.getProducts);
router.post("/add", productController.addProduct);


module.exports = router;