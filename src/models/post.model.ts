import mongoose, { Schema } from "mongoose";
import { IBaseModel } from "./base.model";

// Create an interface representing a document in MongoDB.
export interface IPost extends IBaseModel {
  user_id: Schema.Types.ObjectId;
  content: String;
}

const postSchema: Schema = new Schema<IPost>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedBy: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

// Indexing
postSchema.index({ user_id: 1 }, { name: "user_id_1" });

const Post = mongoose.model<IPost>("Post", postSchema);

export default Post;
