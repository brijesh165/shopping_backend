const db = require('./../utils/mongoconnection');
const authController = require('./../utils/middleware/auth-controller');
const formValidationMiddleware = require('./../utils/middleware/form-validation-middleware');
const { check } = require('express-validator');

const userController = require('./../controller/userController');

module.exports = function (app) {
  app.post("/login", [
    check("username").not().isEmpty().withMessage("User name is required"),
    check("password").not().isEmpty().withMessage("Password is required")
  ], formValidationMiddleware, userController.login);
}
