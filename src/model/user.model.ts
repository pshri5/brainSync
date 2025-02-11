import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 10
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)