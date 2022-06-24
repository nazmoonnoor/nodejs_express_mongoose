import express from "express";
import { PostController } from "../controllers/post.controller";
import { Schemas, ValidateJoi } from "../middleware/joi";
import { PostService } from "../services/post.service";

const router = express.Router();

const postService = new PostService();
const postController = new PostController(postService);

router.post(
  "/create",
  ValidateJoi(Schemas.post.create),
  postController.createPost
);
router.get("/get/:postId", postController.fetchPost);
router.get("/get", postController.fetchAll);
router.patch(
  "/update/:postId",
  ValidateJoi(Schemas.post.update),
  postController.updatePost
);
router.delete("/delete/:postId", postController.deletePost);

export default router;
