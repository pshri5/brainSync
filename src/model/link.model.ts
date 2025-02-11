import mongoose from "mongoose";
import { Schema } from "mongoose";
import { User } from "./user.model";

const linkSchema = new Schema({
    hash:{
        type: String,
        required: true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    }
},{timestamps:true})

export const Link = mongoose.model("Link",linkSchema)