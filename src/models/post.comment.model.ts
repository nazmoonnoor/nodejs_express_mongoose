import mongoose, { Schema } from "mongoose";
import { IBaseModel } from "./base.model";

// Create an interface representing a document in MongoDB.
export interface IPostComment extends IBaseModel {
  user_id: Schema.Types.ObjectId;
  post_id: Schema.Types.ObjectId;
  user_comment: String;
  hashtags: [];
  mentions: [];
}

const commentSchema: Schema = new Schema<IPostComment>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post_id: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user_comment: {
      type: String,
      required: true,
    },
    hashtags: {
      type: [String],
      required: true,
    },
    mentions: {
      type: [String],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

// Indexing
commentSchema.index({ user_id: 1, post_id: 1 }, { name: "user_id_email_id_1" });

const PostComment = mongoose.model<IPostComment>("PostComment", commentSchema);

export default PostComment;
