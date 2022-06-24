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
exports.PostCommentService = void 0;
const post_comment_model_1 = __importDefault(require("../models/post.comment.model"));
class PostCommentService {
    constructor() {
        this.createPostComment = (opts) => __awaiter(this, void 0, void 0, function* () {
            const postComment = new post_comment_model_1.default({
                user_id: opts && opts.user_id,
                post_id: opts && opts.post_id,
                user_comment: opts && opts.user_comment,
                hashtags: opts && opts.hashtags,
                mentions: opts && opts.mentions,
            });
            return yield postComment.save();
        });
        this.fetchPostComment = (postCommentId) => __awaiter(this, void 0, void 0, function* () {
            return yield post_comment_model_1.default.findById(postCommentId);
        });
        this.fetchAll = () => __awaiter(this, void 0, void 0, function* () { return yield post_comment_model_1.default.find(); });
        this.updatePostComment = (postCommentId, data) => __awaiter(this, void 0, void 0, function* () {
            return yield post_comment_model_1.default.findById(postCommentId).then((postComment) => {
                if (postComment) {
                    postComment.set(data);
                    return postComment.save();
                }
                else {
                    throw new Error("not found!");
                }
            });
        });
        this.deletePostComment = (postCommentId) => __awaiter(this, void 0, void 0, function* () { return yield post_comment_model_1.default.findByIdAndDelete(postCommentId); });
        /*
         * Gets all comments for a specific user.
         */
        this.fetchByUser = (userId) => __awaiter(this, void 0, void 0, function* () { return yield post_comment_model_1.default.find({ user_id: userId }); });
        /*
         * Gets a ranked list of the top 10 hashtags and top 10 mentions, and how often they were used.
         */
        this.fetchTopHashtagsAndMentions = (limit) => __awaiter(this, void 0, void 0, function* () {
            let hashtagPipeline = post_comment_model_1.default.aggregate([
                { $unwind: "$hashtags" },
                {
                    $group: {
                        _id: { hashtags: "$hashtags" },
                        hashtag: { $first: "$hashtags" },
                        count: { $sum: 1 },
                    },
                },
                { $project: { _id: 0, hashtag: 1, count: 1 } },
                { $sort: { count: -1 } },
                { $limit: limit },
            ]);
            let mentionPipeline = post_comment_model_1.default.aggregate([
                { $unwind: "$mentions" },
                {
                    $group: {
                        _id: { mentions: "$mentions" },
                        mention: { $first: "$mentions" },
                        count: { $sum: 1 },
                    },
                },
                { $project: { _id: 0, mention: 1, count: 1 } },
                { $sort: { count: -1 } },
                { $limit: limit },
            ]);
            return yield Promise.all([hashtagPipeline, mentionPipeline]);
        });
    }
}
exports.PostCommentService = PostCommentService;
