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
exports.PostService = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
class PostService {
    constructor() {
        this.createPost = (opts) => __awaiter(this, void 0, void 0, function* () {
            const post = new post_model_1.default({
                user_id: opts && opts.user_id,
                content: opts && opts.content,
            });
            return yield post.save();
        });
        this.fetchPost = (postId) => __awaiter(this, void 0, void 0, function* () {
            return yield post_model_1.default.findById(postId);
        });
        this.fetchAll = () => __awaiter(this, void 0, void 0, function* () { return yield post_model_1.default.find(); });
        this.updatePost = (postId, data) => __awaiter(this, void 0, void 0, function* () {
            return yield post_model_1.default.findById(postId).then((post) => {
                if (post) {
                    post.set(data);
                    return post.save();
                }
                else {
                    throw new Error("not found!");
                }
            });
        });
        this.deletePost = (postId) => __awaiter(this, void 0, void 0, function* () { return yield post_model_1.default.findByIdAndDelete(postId); });
    }
}
exports.PostService = PostService;
