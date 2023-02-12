const router=require("express").Router();
const UserInfo = require('../model/UserInfo');

router.post("/login",async(req,res)=>{
    const{uemail,upass}=req.body

    try{
        const user=await UserInfo.findOne({uemail:uemail});
        console.log(user);
        if(user){
            if(user.upass === upass){
                res.send({data:user, message:`Hello ${user.uname}, You Logged In successfuly!`})
            }
            else{
                res.send({message:`Wrong Password!`})
            }
        }
        else{
            res.send({message:`User Not Exists!`})
        }
    }
    catch(e){
        console.log(e);
    }
})


router.post("/signup",async(req,res)=>{
    
    const{uemail,uname,uphone,upass}=req.body
    console.log("signup")

    try{
        const EmailExists=await UserInfo.findOne({uemail:uemail})
        if(EmailExists){
            res.send({message:`Email Already Exists!`})
        }
        else{

            const user = new UserInfo({
                uemail: uemail,
                uname: uname,
                uphone: uphone,
                upass: upass,
            });

            const data = await user.save();
            res.send({data:data, message:`Hello ${data.uname}, You Sign In successfuly!`})
        }
    }
    catch(e){
        console.log(e);
    }
})


module.exports = router;