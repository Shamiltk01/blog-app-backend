const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const usersRouter=require("./routers/usersRouter")
const postRouter=require("./routers/postRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://shamiltk02:shamiltk98@cluster0.7syqm.mongodb.net/blodDb?retryWrites=true&w=majority",{useNewUrlParser:true})


app.use("/api/user",usersRouter)
app.use("/api/post",postRouter)

app.listen(3001,()=>{
  console.log("server is running")
})