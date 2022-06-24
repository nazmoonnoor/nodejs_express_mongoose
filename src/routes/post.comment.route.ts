import express from "express";
import { PostCommentController } from "../controllers/post.comment.controller";
import { Schemas, ValidateJoi } from "../middleware/joi";
import { PostCommentService } from "../services/post.comment.service";

const router = express.Router();

const postCommentService = new PostCommentService();
const postCommentController = new PostCommentController(postCommentService);

router.post(
  "/create",
  ValidateJoi(Schemas.postComment.create),
  postCommentController.createPostComment
);
router.get("/get/:postCommentId", postCommentController.fetchPostComment);
router.get("/get", postCommentController.fetchAll);
router.patch(
  "/update/:postCommentId",
  ValidateJoi(Schemas.postComment.update),
  postCommentController.updatePostComment
);
router.delete(
  "/delete/:postCommentId",
  postCommentController.deletePostComment
);
router.get("/getByUser/:userId", postCommentController.fetchByUser);
router.get(
  "/getHashtagsAndMentions/:limit",
  postCommentController.fetchTopHashtagsAndMentions
);

export default router;
