"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UserRoutes.prototype.config = function () {
        this.router.get('/', userController_1.userController.getUsers);
        this.router.post('/signup', userController_1.userController.signUp);
        this.router.post('/signin', userController_1.userController.signIn);
        this.router.post('/:id/balance', userController_1.userController.setBalance);
        this.router.post('/:id/alert', userController_1.userController.setAlert);
        this.router.get('/:id', userController_1.userController.getUser);
        this.router.put('/update/:id', userController_1.userController.updateUser);
        this.router.delete('/:id', userController_1.userController.deleteUser);
    };
    return UserRoutes;
}());
var userRoutes = new UserRoutes();
exports.default = userRoutes.router;
