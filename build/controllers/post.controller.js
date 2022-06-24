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
exports.PostController = void 0;
class PostController {
    constructor(postService) {
        this.postService = postService;
        this.createPost = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { user_id, content } = req.body;
            return yield this.postService
                .createPost({ user_id, content })
                .then((post) => res.status(201).json({ post }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.fetchPost = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const postId = req.params.postId;
            return yield this.postService
                .fetchPost(postId)
                .then((post) => post
                ? res.status(200).json({ post })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.fetchAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.postService
                .fetchAll()
                .then((posts) => res.status(200).json({ posts }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.updatePost = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const postId = req.params.postId;
            return yield this.postService
                .updatePost(postId, req.body)
                .then((post) => res.status(201).json({ post }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.deletePost = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const postId = req.params.postId;
            return yield this.postService
                .deletePost(postId)
                .then((post) => post
                ? res.status(201).json({ post, message: "Deleted" })
                : res.status(404).json({ message: "not found" }))
                .catch((error) => res.status(500).json({ error }));
        });
        this.postService = postService;
    }
}
exports.PostController = PostController;
