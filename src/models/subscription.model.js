import mongoose from "mongoose";
import { User } from "./user.model";

const subscriptioSchema = new mongoose.Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);
export const Subscription = mongoose.model("Subscription", subscriptioSchema);
