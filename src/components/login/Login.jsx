import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { auth } from '../../lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar=(e)=>{
        if(e.target.files[0]){
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
    };

    

    const handleRegister= async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username,email,password}=Object.fromEntries(formData);
  
        try{
            
          const res = await createUserWithEmailAndPassword(auth,email,password); 
         
        }
        catch(err){
          console.log(err)
          toast.error(err.message)
        }
  
    }

    const handleLogin=(e)=>{}
  return (
    <div className='login'>
      <div className='item'>
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
            <input type="email" name="email"   placeholder='Email'/>
            <input type="password" name="password" placeholder='Password'/>
            <button>Sign In</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
      <h2>Create an Account</h2>
        <form onClick={handleRegister}>
            <label htmlFor='file'>
                <img src={avatar.url || "./avatar.png"} alt="userimg"/>
                Upload an Image</label>
            <input type="file"  id="file" style={{display:'none'}} onChange={handleAvatar} />
            <input type="text" name="username"  placeholder='Username'/>
            <input type="text" name="email"  placeholder='Email'/>
            <input type="password" name="password"  placeholder='Password'/>
            <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login
