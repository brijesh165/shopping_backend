let mongoose = require('mongoose');

let Users = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        default: "en"
    },
    currency: {
        type: String,
        required: true,
        default: "USD"
    },
    active: {
        type: String,
        default: "true"
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
        },
    },
    versionKey: false
})

module.exports = mongoose.model('Users', Users);