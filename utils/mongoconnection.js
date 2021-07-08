let mongoose = require('mongoose');

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(process.env.MONGO_CONNECTION, {
            poolSize: 15,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => {
                console.log('Database Connection Status :  Active')
            })
            .catch(err => {
                console.error('Database Connection Status :  Failed')
            })
    }
}

module.exports = new Database();