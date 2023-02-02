import React from 'react'
import { useState } from 'react'
import { loginRoute } from '../../utils/ApiRooute'
import '../register/Register'
import axios from 'axios'
const Login = () => {
    const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
      })
      const handleSubmit =async(event)=>{
        const {username,password}=values
        event.preventDefault();
        const {data}=await  axios.post(loginRoute,{
          username,
         
          password
        })
        if(data.status ===false){
         console.log("not done");
        }
        if(data.status ===true){
          console.log("done!!!");
         console.log(data)
          localStorage.setItem('http://localhost:5000',JSON.stringify(data.user))
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
            <img src="" alt="" />``
            <h1>snappy</h1>
        </div>
       
        <input type="text" value={values.username}  onChange={handleChange}  placeholder='username' name='username' />
        <input type="password"  value={values.password}  onChange={handleChange} placeholder='password' name='password' />
        
        <button type='submit'>Login User</button>
        <span>
            Already have an account ? <span>Login.</span>
          </span>
      </form>
    </div>
  )
}

export default Login
