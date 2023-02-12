import React from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

function Signup() {

    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            const data = await axios.post("/signup", {
                email, password
            })

            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='signUp'>
            <h1>Sign Up</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="email" name="" id="" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password" name="" id="" />

                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>Already have Accout</p>
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Signup