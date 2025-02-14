import { Router } from "express";
import { registerUser } from "../controller/user.controller";

const userRouter = Router()

userRouter.route("/signup").post(registerUser)


export default userRouter