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
exports.PostCommentController = void 0;
class PostCommentController {
    constructor(postCommentService) {
        this.postCommentService = postCommentService;
        this.createPostComment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { user_id, post_id, user_comment, hashtags, mentions } = req.body;
            return yield this.postCommentService
                .createPostComment({ user_id, post_id, user_comment, hashtags, mentions })
                .then((postComment) => res.status(201).json({ postComment }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.fetchPostComment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const postCommentId = req.params.postCommentId;
            return yield this.postCommentService
                .fetchPostComment(postCommentId)
                .then((postComment) => postComment
                ? res.status(200).json({ postComment })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.fetchAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.postCommentService
                .fetchAll()
                .then((postComments) => res.status(200).json({ postComments }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.updatePostComment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const postCommentId = req.params.postCommentId;
            return yield this.postCommentService
                .updatePostComment(postCommentId, req.body)
                .then((postComment) => res.status(201).json({ postComment }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.deletePostComment = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const postCommentId = req.params.postCommentId;
            return yield this.postCommentService
                .deletePostComment(postCommentId)
                .then((postComment) => postComment
                ? res.status(201).json({ postComment, message: "Deleted" })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        /*
         * Gets all comments for a specific user.
         */
        this.fetchByUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            return yield this.postCommentService
                .fetchByUser(userId)
                .then((postComment) => postComment
                ? res.status(200).json({ postComment })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        /*
         * Gets a ranked list of the top 10 hashtags and top 10 mentions, and how often they were used.
         * Endpoint has `limit` parameter to decide how many to get, default is 10
         */
        this.fetchTopHashtagsAndMentions = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const limit = req.params && req.params.limit ? parseInt(req.params.limit) : 10;
            return yield this.postCommentService
                .fetchTopHashtagsAndMentions(limit)
                .then((values) => {
                values
                    ? res.status(200).json({ values })
                    : res.status(404).json({ message: "not found" });
            })
                .catch((error) => res.status(500).json({ error }));
        });
        this.postCommentService = postCommentService;
    }
}
exports.PostCommentController = PostCommentController;
