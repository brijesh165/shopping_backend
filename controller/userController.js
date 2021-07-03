const db = require('./../context/ContextManager');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

let _controller = {};

/**
 * 
 * @param {*} username 
 * @param {*} password 
 */
_controller.login = async function (req, res) {
    try {
        const user = await db.userModel.findOne({ username: req.body.username, password: md5(req.body.password) })

        // console.log("User: ", user);
        if (user) {
            const token = jwt.sign({ id: req.body.username }, "provideyourprivatekey");

            res.send({
                status: 200,
                token: token,
                user: user
            })
        } else {
            res.send({
                status: 401,
                error: "Invalid username or password"
            })
        }
    } catch (err) {
        console.log("Login Error: ", err);
    }
}

module.exports = _controller;