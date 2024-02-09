const express=require("express")
const blogModel=require("../model/blogModel")


const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let blog=new blogModel(data)
    let result=await blog.save()
    res.json({status:"success"})
})



module.exports=router

