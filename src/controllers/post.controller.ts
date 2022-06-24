import { NextFunction, Request, Response } from "express";
import Post from "../models/post.model";
import { PostService } from "../services/post.service";

export class PostController {
  constructor(private readonly postService: PostService) {
    this.postService = postService;
  }

  createPost = async (req: Request, res: Response, next: NextFunction) => {
    const { user_id, content } = req.body;

    return await this.postService
      .createPost({ user_id, content })
      .then((post) => res.status(201).json({ post }))
      .catch((error) => res.status(500).json({ error }));
  };

  fetchPost = async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;

    return await this.postService
      .fetchPost(postId)
      .then((post) =>
        post
          ? res.status(200).json({ post })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };

  fetchAll = async (req: Request, res: Response, next: NextFunction) => {
    return await this.postService
      .fetchAll()
      .then((posts) => res.status(200).json({ posts }))
      .catch((error) => res.status(500).json({ error }));
  };

  updatePost = async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;

    return await this.postService
      .updatePost(postId, req.body)
      .then((post) => res.status(201).json({ post }))
      .catch((error) => res.status(500).json({ error }));
  };

  deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    return await this.postService
      .deletePost(postId)
      .then((post) =>
        post
          ? res.status(201).json({ post, message: "Deleted" })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };
}
