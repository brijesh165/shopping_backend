const userModel = require('./User');
const productsModel = require('./Products');
const ordersModel = require('./Orders');

const _manager = {
    userModel: userModel,
    productsModel: productsModel,
    ordersModel: ordersModel
}

module.exports = _manager;