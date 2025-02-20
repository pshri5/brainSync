import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Tag } from "./tag.model";
import { User } from "./user.model";

const contentTypes = ["image","video","article","audio"]

const contentSchema = new Schema({
    link:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: contentTypes,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    tags:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: Tag
    }],
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    }
},{timestamps:true})

export const Content = mongoose.model("Content",contentSchema)
