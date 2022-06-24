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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    constructor() {
        this.createUser = (opts) => __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.default({
                name: opts && opts.name,
                email: opts && opts.email,
            });
            return yield user.save();
        });
        this.fetchUser = (userId) => __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findById(userId);
        });
        this.fetchAll = () => __awaiter(this, void 0, void 0, function* () { return yield user_model_1.default.find(); });
        this.updateUser = (userId, data) => __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findById(userId).then((user) => {
                if (user) {
                    user.set(data);
                    return user.save();
                }
                else {
                    throw new Error("not found!");
                }
            });
        });
        this.deleteUser = (userId) => __awaiter(this, void 0, void 0, function* () { return yield user_model_1.default.findByIdAndDelete(userId); });
    }
}
exports.UserService = UserService;
