import { Content } from "../model/content.model";
import { asyncHandler } from "../utils/asyncHandler";

//create content
const createContent = asyncHandler(async(req,res)=>{
    const {content} = req.body
    if (!content) {
        throw new Error("Content is required")
    }
    const content = await Content.create({
        content,
        userID: req.user._id
    })

    return res.status(200).json({
        success: true,
        message: "Content added successfully"
    })
})
//read content
const readContent = asyncHandler(async(req,res)=>{
    const {contentID} = req.params
    const getcontent = await Content.findOne({
        _id:contentID,
        userID:req.user._id
    })
    res.status(200).json({
        success: true,
        message:"All the content is retrieved successfullly"
    })
})
//update content
const updateContent = asyncHandler(async(req,res)=>{
    const {contentID} = req.params
    const {content} = req.body
    const newContent = await Content.findOneAndUpdate({
        _id: contentID,
        userID: req.user._id
    },{
        $set:{
            content
        }
    },{
        new:true
    })
    if (!content) {
        throw new Error("Content not found")
    }
    return res.status(200).json({
        success: true,
        message: "Content updated successfully"
    })
})
//delete content
const deleteContent = asyncHandler(async(req,res)=>{
    const {contentID} = req.params
    const delContent = await Content.findByIdAndDelete({
        _id: contentID,
        userID: req.user._id
    })
    return res.status(200).json({
        success: true,
        message:"Content deleted successfully"
    })
})


export {
    createContent,
    readContent,
    updateContent,
    deleteContent
}