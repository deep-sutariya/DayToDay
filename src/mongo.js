const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-day-2-day")
.then(()=>{
    console.log("mongoose connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection",newSchema)

module.exports=collection