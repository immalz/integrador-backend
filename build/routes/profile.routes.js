"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var amountController_1 = require("../controllers/amountController");
var AmountRoutes = /** @class */ (function () {
    function AmountRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AmountRoutes.prototype.config = function () {
        this.router.post('/', amountController_1.amountController.createAmount);
        this.router.get('/:id', amountController_1.amountController.getAmounts);
        this.router.get('/only/:id', amountController_1.amountController.getAmount);
        this.router.put('/update/:id', amountController_1.amountController.updateAmount);
        this.router.delete('/delete/:id', amountController_1.amountController.deleteAmount);
    };
    return AmountRoutes;
}());
var amountRoutes = new AmountRoutes();
exports.default = amountRoutes.router;
