const authMiddleware = require('./../utils/middleware/auth-controller');
const formValidationMiddleware = require('./../utils/middleware/form-validation-middleware');
const { check } = require('express-validator');

const productController = require('./../controller/productController');

module.exports = function (app) {
    // app.post("/create-product", [
    //     check("product_name").not().isEmpty().withMessage("Product name is required"),
    //     check("category").not().isEmpty().withMessage("Category is required"),
    //     check("subcategory").not().isEmpty().withMessage("Subcategory is required"),
    //     check("price").not().isEmpty().withMessage("Price is required"),
    //     check("description").not().isEmpty().withMessage("Description is required"),
    //     check("image").not().isEmpty().withMessage("image is required"),
    //     check("status").not().isEmpty().withMessage("Status is required")
    // ], formValidationMiddleware, authMiddleware, productController.createProduct);
    app.post("/create-product", productController.createProduct);
}


