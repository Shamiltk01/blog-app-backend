const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRouter=require("./control/blogRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://shamiltk02:shamiltk98@cluster0.7syqm.mongodb.net/blogDb?retryWrites=true&w=majority",{useNewUrlParser})

app.use("/api/blog",blogRouter)

app.listen(3001,()=>{
    console.log("server running...")
})

