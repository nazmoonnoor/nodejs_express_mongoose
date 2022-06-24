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
exports.Schemas = exports.ValidateJoi = void 0;
const joi_1 = __importDefault(require("joi"));
const logger_1 = __importDefault(require("../utils/logger"));
const ValidateJoi = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(422).json({ error });
        }
    });
};
exports.ValidateJoi = ValidateJoi;
exports.Schemas = {
    user: {
        create: joi_1.default.object({
            name: joi_1.default.string().required(),
            email: joi_1.default.string().required(),
            updatedAt: joi_1.default.date().optional(),
            updatedBy: joi_1.default.string().optional(),
        }),
        update: joi_1.default.object({
            name: joi_1.default.string().optional(),
            email: joi_1.default.string().optional(),
            updatedAt: joi_1.default.date().optional(),
            updatedBy: joi_1.default.string().optional(),
        }),
    },
    post: {
        create: joi_1.default.object({
            user_id: joi_1.default.string().required(),
            content: joi_1.default.string().required(),
            updatedAt: joi_1.default.date().optional(),
            updatedBy: joi_1.default.string().optional(),
        }),
        update: joi_1.default.object({
            user_id: joi_1.default.string().optional(),
            content: joi_1.default.string().optional(),
            updatedAt: joi_1.default.date().optional(),
            updatedBy: joi_1.default.string().optional(),
        }),
    },
    postComment: {
        create: joi_1.default.object({
            user_id: joi_1.default.string().required(),
            post_id: joi_1.default.string().required(),
            user_comment: joi_1.default.string().required(),
            hashtags: joi_1.default.array().optional(),
            mentions: joi_1.default.array().optional(),
            updatedAt: joi_1.default.date().optional(),
            updatedBy: joi_1.default.string().optional(),
        }),
        update: joi_1.default.object({
            user_id: joi_1.default.string().optional(),
            post_id: joi_1.default.string().optional(),
            user_comment: joi_1.default.string().optional(),
            hashtags: joi_1.default.array().optional(),
            mentions: joi_1.default.array().optional(),
            updatedAt: joi_1.default.date().optional(),
            updatedBy: joi_1.default.string().optional(),
        }),
    },
};
