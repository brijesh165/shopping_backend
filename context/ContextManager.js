const userModel = require('./User');
const productsModel = require('./Products');

const _manager = {
    userModel: userModel,
    productsModel: productsModel
}

module.exports = _manager;