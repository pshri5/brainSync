import { Router } from "express";
import { registerUser } from "../controller/user.controller";

const router = Router()

router.route("/signup").post(registerUser)


export default router