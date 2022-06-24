import { NextFunction, Request, Response } from "express";
import PostComment from "../models/post.comment.model";
import { PostCommentService } from "../services/post.comment.service";

export class PostCommentController {
  constructor(private readonly postCommentService: PostCommentService) {
    this.postCommentService = postCommentService;
  }
  createPostComment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { user_id, post_id, user_comment, hashtags, mentions } = req.body;

    return await this.postCommentService
      .createPostComment({ user_id, post_id, user_comment, hashtags, mentions })
      .then((postComment) => res.status(201).json({ postComment }))
      .catch((error) => res.status(500).json({ error }));
  };

  fetchPostComment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postCommentId = req.params.postCommentId;

    return await this.postCommentService
      .fetchPostComment(postCommentId)
      .then((postComment) =>
        postComment
          ? res.status(200).json({ postComment })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };

  fetchAll = async (req: Request, res: Response, next: NextFunction) => {
    return await this.postCommentService
      .fetchAll()
      .then((postComments) => res.status(200).json({ postComments }))
      .catch((error) => res.status(500).json({ error }));
  };

  updatePostComment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postCommentId = req.params.postCommentId;

    return await this.postCommentService
      .updatePostComment(postCommentId, req.body)
      .then((postComment) => res.status(201).json({ postComment }))
      .catch((error) => res.status(500).json({ error }));
  };

  deletePostComment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const postCommentId = req.params.postCommentId;
    return await this.postCommentService
      .deletePostComment(postCommentId)
      .then((postComment) =>
        postComment
          ? res.status(201).json({ postComment, message: "Deleted" })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };

  /*
   * Gets all comments for a specific user.
   */
  fetchByUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return await this.postCommentService
      .fetchByUser(userId)
      .then((postComment) =>
        postComment
          ? res.status(200).json({ postComment })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };

  /*
   * Gets a ranked list of the top 10 hashtags and top 10 mentions, and how often they were used.
   * Endpoint has `limit` parameter to decide how many to get, default is 10
   */
  fetchTopHashtagsAndMentions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const limit: number =
      req.params && req.params.limit ? parseInt(req.params.limit) : 10;

    return await this.postCommentService
      .fetchTopHashtagsAndMentions(limit)
      .then((values) => {
        values
          ? res.status(200).json({ values })
          : res.status(404).json({ message: "not found" });
      })
      .catch((error) => res.status(500).json({ error }));
  };
}
