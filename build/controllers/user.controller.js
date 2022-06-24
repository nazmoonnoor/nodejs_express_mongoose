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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, email } = req.body;
            return yield this.userService
                .createUser({ name, email })
                .then((user) => res.status(201).json({ user }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.fetchUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            return yield this.userService
                .fetchUser(userId)
                .then((user) => user
                ? res.status(200).json({ user })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.fetchAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.userService
                .fetchAll()
                .then((users) => res.status(200).json({ users }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            return yield this.userService
                .updateUser(userId, req.body)
                .then((user) => res.status(201).json({ user }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.deleteUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            return yield this.userService
                .deleteUser(userId)
                .then((user) => user
                ? res.status(201).json({ user, message: "Deleted" })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.userService = userService;
    }
}
exports.UserController = UserController;
