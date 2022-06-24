"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const joi_1 = require("../middleware/joi");
const user_service_1 = require("../services/user.service");
const router = express_1.default.Router();
const userService = new user_service_1.UserService();
const userController = new user_controller_1.UserController(userService);
router.post("/create", (0, joi_1.ValidateJoi)(joi_1.Schemas.user.create), userController.createUser);
router.get("/get/:userId", userController.fetchUser);
router.get("/get", userController.fetchAll);
router.patch("/update/:userId", (0, joi_1.ValidateJoi)(joi_1.Schemas.user.update), userController.updateUser);
router.delete("/delete/:userId", userController.deleteUser);
exports.default = router;
