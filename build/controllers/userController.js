"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
var database_1 = __importDefault(require("../database"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.signUp = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRegister;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('INSERT INTO users set ?', [req.body])];
                    case 1:
                        userRegister = _a.sent();
                        if (userRegister.length === 0) {
                            res.json({ message: 'Hubo un error, vuelve a intentarlo!' });
                        }
                        else {
                            res.json({ successfull: 'Usuario registrado con exito!' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.signIn = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, username = _a.username, password = _a.password;
                        return [4 /*yield*/, database_1.default.query("SELECT * FROM users where username = ? and password = ?", [username, password])];
                    case 1:
                        user = _b.sent();
                        if (user.length === 0) {
                            res.json({ message: 'No se ha encontrado un Usuario' });
                        }
                        else {
                            res.json(user);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('llegue aqui');
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM users')];
                    case 1:
                        users = _a.sent();
                        res.json(users);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM users WHERE id_user = ?', [id])];
                    case 1:
                        user = _a.sent();
                        if (user.lenght !== 0) {
                            return [2 /*return*/, res.json(user[0])];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.setBalance = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var balance, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        balance = req.body.balance;
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE users set balance = ? where id_user = ?', [balance, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Se ha a\u00F1adido el nuevo balance!" });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.setAlert = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var alert, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = req.body.alert;
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE users set alert = ? where id_user = ?', [alert, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Se ha registrado la alerta!" });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE users set ? WHERE id_user = ?', [req.body, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Los datos han sido actualizados!" });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('DELETE FROM users WHERE id_user = ?', [id])];
                    case 1:
                        _a.sent();
                        res.json({ message: 'Su ha eliminado la cuenta!' });
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.userController = new UserController();
