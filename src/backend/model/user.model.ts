import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    }
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

export const User = mongoose.model("User", userSchema)