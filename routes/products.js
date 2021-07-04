const diskStorage = require('./../utils/diskstorage');
const authMiddleware = require('./../utils/middleware/auth-controller');
const formValidationMiddleware = require('./../utils/middleware/form-validation-middleware');
const { check } = require('express-validator');

const productController = require('./../controller/productController');

module.exports = function (app) {
    app.post("/create-product", diskStorage.single('image'), [
        check("product_name").not().isEmpty().withMessage("Product name is required"),
        check("category").not().isEmpty().withMessage("Category is required"),
        check("subcategory").not().isEmpty().withMessage("Subcategory is required"),
        check("price").not().isEmpty().withMessage("Price is required"),
        check("description").not().isEmpty().withMessage("Description is required"),
        check("status").not().isEmpty().withMessage("Status is required"),
        check("user_id").not().isEmpty().withMessage("User id is required")
    ], formValidationMiddleware, authMiddleware, productController.createProduct);

    app.post("/fetch-products", authMiddleware, productController.fetchProducts)

    app.post("/fetch-user-products", authMiddleware, productController.fetchUserProducts)

    app.post('/edit-product', diskStorage.single('image'), [
        check("product_name").not().isEmpty().withMessage("Product name is required"),
        check("category").not().isEmpty().withMessage("Category is required"),
        check("subcategory").not().isEmpty().withMessage("Subcategory is required"),
        check("price").not().isEmpty().withMessage("Price is required"),
        check("description").not().isEmpty().withMessage("Description is required"),
        check("status").not().isEmpty().withMessage("Status is required"),
        check("user_id").not().isEmpty().withMessage("User id is required")
    ], formValidationMiddleware, authMiddleware, productController.editProduct)

    app.post("/delete-product", [
        check("id").not().isEmpty().withMessage("Product id is required")
    ], formValidationMiddleware, authMiddleware, productController.deleteProduct)

    app.post("/checkout", [
        check('user_id').not().isEmpty().withMessage("User id is required")
    ], formValidationMiddleware, authMiddleware, productController.checkout)

}


