import React from 'react'
import { useState } from 'react'
import './register.css'
import axios from "axios"
import { registerRoute } from '../../utils/ApiRooute'
const Register = () => {
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleSubmit =async(event)=>{
    const {username,email,password}=values
    event.preventDefault();
    const {data}=await  axios.post(registerRoute,{
      username,
      email,
      password
    })
    if(data.status ===false){
     console.log("not done");
    }
    if(data.status ===true){
      console.log("done!!!");
     console.log(data)
      localStorage.setItem('chat-app-user',JSON.stringify(data.user))
     }
  }
  
  const handleValidation=()=>{
    const {password,confirmPassword,username,email }=values;
    if(password !==confirmPassword){
console.log("password are not the same");
    }
  }
  const handleChange=(e)=>{ 
    setValues({...values,[e.target.name]:event.target.value})
    
  }
  return (
    <div className='container'>
      <form action="" onSubmit={handleSubmit}>
        <div className="brand">
            <img src="" alt="" />
            <h1>snappy</h1>
        </div>
        <input type="text" value={values.username}  onChange={handleChange} placeholder='Username' name='username' />
        <input type="email" value={values.email}  onChange={handleChange}  placeholder='email' name='email' />
        <input type="password"  value={values.password}  onChange={handleChange} placeholder='password' name='password' />
        <input type="password" value={values.confirmPassword}  onChange={handleChange} placeholder='Confirm password' name='confirmPassword' />
        <button type='submit'>Create User</button>
        <span>
            Already have an account ? <span>Login.</span>
          </span>
      </form>
    </div>
  )
}

export default Register

