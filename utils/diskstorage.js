const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf().toString() + '-' + file.originalname)
    }
});

module.exports = multer({ storage: storage });
