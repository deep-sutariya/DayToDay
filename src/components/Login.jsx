import React, { useState } from 'react'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User haven't sign up")
                }
            }) 
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }

  return (
    <div className='login'>

        <h1>login</h1>
        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" name="" id=""/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="" id=""/>

            <input type="submit" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/signup">SignUP</Link>
    </div>
  )
}

export default Login
