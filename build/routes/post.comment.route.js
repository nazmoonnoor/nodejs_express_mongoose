"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_comment_controller_1 = require("../controllers/post.comment.controller");
const joi_1 = require("../middleware/joi");
const post_comment_service_1 = require("../services/post.comment.service");
const router = express_1.default.Router();
const postCommentService = new post_comment_service_1.PostCommentService();
const postCommentController = new post_comment_controller_1.PostCommentController(postCommentService);
router.post("/create", (0, joi_1.ValidateJoi)(joi_1.Schemas.postComment.create), postCommentController.createPostComment);
router.get("/get/:postCommentId", postCommentController.fetchPostComment);
router.get("/get", postCommentController.fetchAll);
router.patch("/update/:postCommentId", (0, joi_1.ValidateJoi)(joi_1.Schemas.postComment.update), postCommentController.updatePostComment);
router.delete("/delete/:postCommentId", postCommentController.deletePostComment);
router.get("/getByUser/:userId", postCommentController.fetchByUser);
router.get("/getHashtagsAndMentions/:limit", postCommentController.fetchTopHashtagsAndMentions);
exports.default = router;
