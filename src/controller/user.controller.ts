import { User } from "../model/user.model"
import { asyncHandler } from "../utils/asyncHandler"

// register user
const registerUser = asyncHandler(async(req,res)=>{
    const {username,password} = req.body
    //validating
    if (
        [username,password].some((field)=>field.trim()==="")
    ) {
        throw new Error("All fields are mandatory")
    }
    
    const existingUser = await User.findOne({username})
    if (existingUser) {
        throw new Error("Username already exists")
    }
    const user = await User.create({
        username,
        password // add hashed password
    })
    return res.status(200).json({
        success: true,
        message:"User signed up successfully"
    })
})


export {registerUser}