const db = require('./../context/ContextManager');
const multer = require('multer');
const upload = multer({ dest: 'assets/images' });

const _controller = {};

_controller.createProduct = async function (req, res) {
    try {
        console.log("Create Product Params: ", req.body);
        upload.single(req.body.image);
        await db.productsModel.create(req.body)

        res.send({
            status: 200
        })
    } catch (err) {
        console.log("Create Product Error");
    }
}

module.exports = _controller;