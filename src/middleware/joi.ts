import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/user.model";
import logger from "../utils/logger";
import { IPost } from "../models/post.model";
import { IPostComment } from "../models/post.comment.model";

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error) {
      logger.error(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  user: {
    create: Joi.object<IUser>({
      name: Joi.string().required(),
      email: Joi.string().required(),
      updatedAt: Joi.date().optional(),
      updatedBy: Joi.string().optional(),
    }),
    update: Joi.object<IUser>({
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      updatedAt: Joi.date().optional(),
      updatedBy: Joi.string().optional(),
    }),
  },
  post: {
    create: Joi.object<IPost>({
      user_id: Joi.string().required(),
      content: Joi.string().required(),
      updatedAt: Joi.date().optional(),
      updatedBy: Joi.string().optional(),
    }),
    update: Joi.object<IPost>({
      user_id: Joi.string().optional(),
      content: Joi.string().optional(),
      updatedAt: Joi.date().optional(),
      updatedBy: Joi.string().optional(),
    }),
  },
  postComment: {
    create: Joi.object<IPostComment>({
      user_id: Joi.string().required(),
      post_id: Joi.string().required(),
      user_comment: Joi.string().required(),
      hashtags: Joi.array().optional(),
      mentions: Joi.array().optional(),
      updatedAt: Joi.date().optional(),
      updatedBy: Joi.string().optional(),
    }),
    update: Joi.object<IPostComment>({
      user_id: Joi.string().optional(),
      post_id: Joi.string().optional(),
      user_comment: Joi.string().optional(),
      hashtags: Joi.array().optional(),
      mentions: Joi.array().optional(),
      updatedAt: Joi.date().optional(),
      updatedBy: Joi.string().optional(),
    }),
  },
};
