import mongoose, { Schema, Types } from "mongoose";
import { IBaseModel } from "./base.model";

// Create an interface representing a document in MongoDB.
export interface IUser extends IBaseModel {
  name: string;
  email: string;
}

const userSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
userSchema.index({ email: 1 }, { name: "email_1" });

const User = mongoose.model<IUser>("User", userSchema);

export default User;
