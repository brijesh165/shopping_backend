const db = require('./../context/ContextManager');
const multer = require('multer');
const upload = multer({ dest: 'assets/images' });
const fs = require('fs');
const _controller = {};

/**
 * 
 * @param {*} product_name 
 * @param {*} category 
 * @param {*} subcategory
 * @param {*} price 
 * @param {*} description
 * @param {*} image
 * @param {*} status
 */
_controller.createProduct = async function (req, res) {
    try {
        const file = req.file;
        req.body.image = 'images/' + file.filename;

        const product = await db.productsModel.create(req.body)

        res.send({
            status: 200,
            product: product
        })
    } catch (err) {
        console.log("Create Product Error", err);
    }
}

/**
 * 
 * @param {*} user_id 
 */
_controller.fetchProducts = async function (req, res, next) {
    try {
        const products = await db.productsModel.find({ user_id: req.body.user_id });

        res.send({
            status: 200,
            products: products
        })
    } catch (error) {
        console.log("Fetch Product Error: ", error)
    }
}

_controller.fetchUserProducts = async function (req, res, next) {
    try {
        const products = await db.productsModel.find();

        res.send({
            status: 200,
            products: products
        })
    } catch (error) {
        console.log("Fetch Product Error: ", error)
    }
}

/**
 * 
 * @param {*} product_name 
 * @param {*} category 
 * @param {*} subcategory
 * @param {*} price 
 * @param {*} description
 * @param {*} image
 * @param {*} status
 */
_controller.editProduct = async function (req, res) {
    try {

        console.log("Req: ", req.body);
        const file = req.file;

        const editParams = {
            product_name: req.body.product_name,
            category: req.body.category,
            subcategory: req.body.subcategory,
            description: req.body.description,
            price: req.body.price,
            image: file.path,
            status: req.body.status
        }
        const product = await db.productsModel.findOneAndUpdate({ _id: req.body._id }, editParams, { new: true });

        res.send({
            status: 200,
            product: product
        })
    } catch (error) {
        console.log("Edit Product Error: ", error)
    }
}

/**
 * 
 * @param {*} id 
 */
_controller.deleteProduct = async function (req, res) {
    try {

        fs.unlinkSync(req.body.imagepath);
        await db.productsModel.findByIdAndDelete(req.body.id);


        res.send({
            status: 200,
            id: req.body.id
        })
    } catch (error) {
        console.log("Delete Product Error: ", error)
    }
}

module.exports = _controller;