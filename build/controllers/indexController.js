"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.json({
            project_Name: 'GESTION DE FINANZAS',
            languajes: 'MEAN STACK',
            version: 1.0
        });
    };
    return IndexController;
}());
exports.indexController = new IndexController();
