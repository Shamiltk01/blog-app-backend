const mongoose=require("mongoose")

const usersModel=new mongoose.Schema({
    name:String,
    email:String,
    age:String,
    phone:String,
    password:String
})

module.exports=mongoose.model("UsersCollection",usersModel)