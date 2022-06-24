"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const joi_1 = require("../middleware/joi");
const post_service_1 = require("../services/post.service");
const router = express_1.default.Router();
const postService = new post_service_1.PostService();
const postController = new post_controller_1.PostController(postService);
router.post("/create", (0, joi_1.ValidateJoi)(joi_1.Schemas.post.create), postController.createPost);
router.get("/get/:postId", postController.fetchPost);
router.get("/get", postController.fetchAll);
router.patch("/update/:postId", (0, joi_1.ValidateJoi)(joi_1.Schemas.post.update), postController.updatePost);
router.delete("/delete/:postId", postController.deletePost);
exports.default = router;
