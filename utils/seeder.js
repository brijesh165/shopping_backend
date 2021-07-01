const seederController = {};
const db = require('./../context/ContextManager');
const md5 = require('md5');

seederController.init = async () => {

    seederController.createUser();
}


seederController.createUser = async () => {
    await db.userModel.create({
        "name": 'Shop1',
        "email": 'shop1@devrepublic.nl',
        "role": 'shop',
        "username": 'shop1',
        "password": md5('devhero'),
        "language": "en",
        "currency": "USD",
        "active": "true",
    }, {
        "name": 'Shop2',
        "email": 'shop2@devrepublic.nl',
        "role": 'shop',
        "username": 'shop2',
        "password": md5('devhero'),
        "language": "en",
        "currency": "USD",
        "active": "true",
    }, {
        "name": 'User1',
        "email": 'user1@devrepublic.nl',
        "role": 'user',
        "username": 'user1',
        "password": md5('devhero'),
        "language": "en",
        "currency": "USD",
        "active": "true",
    }, {
        "name": 'User2',
        "email": 'user2@devrepublic.nl',
        "role": 'user',
        "username": 'user2',
        "password": md5('devhero'),
        "language": "en",
        "currency": "USD",
        "active": "true",
    })
}

module.exports = seederController;