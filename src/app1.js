const express=require("express")
const collection=require("./mongo")
const cors=require("cors")
const app1=express()
app1.use(express.json())
app1.use(express.urlencoded({extended:true}))
app1.use(cors())

app1.get("/login",cors(),(req,res)=>{

})

app1.post("/login",async(req,res)=>{
    const{email,password}=req.body
    console.log("A")

    try{
        const check=await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
        res.json("not exist")
    }
})



app1.post("/signup",async(req,res)=>{
    const{email,password}=req.body
    console.log("ABC")
    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app1.listen(5000,()=>{
    console.log("port connnected")
})