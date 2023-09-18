import React, { useState } from 'react'
import '../style/signup.css';
const Signup = () => {

    const[name, setname] = useState("");
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    const collectdata =()=>{
        console.log(name);
        console.log(email);
        console.log(password);
    }

  return (
    <div className='register'>
        <h1>Register</h1>

        <input className='inputbox' type="text"
        value={name} onChange={(e)=>setname(e.target.value)}
        placeholder='Enter Name'/>

        <input  className='inputbox' type="Email" 
        value={email} onChange={(e)=>setemail(e.target.value)}
        placeholder='Enter Email'/>

        <input  className='inputbox' type="password"
        value={password} onChange={(e)=>setpassword(e.target.value)}
        placeholder='Enter password'/>

        <button onClick={collectdata} type='button'>Sign up</button>
    </div>
  )
}

export default Signup