const express=require("express")
const app=express()

const PORT = 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const cors=require("cors")
app.use(cors());

app.use(require('./route/auth'));

const connectDB = require('./db/db');
connectDB();

app.listen(PORT,()=>{
    console.log(`Listning on ${PORT}`)
})