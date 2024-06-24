import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { auth, db } from '../../lib/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/upload'
const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })
    const[loading,setLoading]=useState(false);

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
        setLoading(true);
        const formData = new FormData(e.target);
        const { username,email,password}=Object.fromEntries(formData);
  
        try{
            
          const res = await createUserWithEmailAndPassword(auth,email,password); 
          //Uploading the user details to the firebase firestore database and blocked is an array which will contain the user ids of the users who are blocked by the user

          const imgUrl= await upload(avatar.file);
          //Uploading the avatar to the firebase storage
          await setDoc(doc(db,"users",res.user.uid),{
           username,
            email,
            avatar:imgUrl,
            id:res.user.uid,
            blocked:[],
          
          });
           
          //Also uploading the chats of users with other users to the firestore db
          await setDoc(doc(db,"userchats",res.user.uid),{
            chats:[]
          })

          toast.success("Account Created Successfully!You can login now")
         
        }
        catch(err){
          console.log(err)
          toast.error(err.message)
        }
        finally{
            setLoading(false);
        }
  
    }

    const handleLogin=async(e)=>{
      e.preventDefault();
      setLoading(true);
      const Formdata = new FormData(e.target);
      const {email,password}=Object.fromEntries(Formdata);

      try{
        const res= await signInWithEmailAndPassword(auth,email,password);
        toast.success("Logged in Successfully");
        
      }catch(err){
        toast.error(err.message)
      }
      finally{
        setLoading(false);
      }
    }
  return (
    <div className='login'>
      <div className='item'>
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
            <input type="email" name="email"   placeholder='Email'/>
            <input type="password" name="password" placeholder='Password'/>
            <button disabled={loading}>{loading?"Loading":"Sign In"}</button>
        </form>
      </div>
      <div className='separator'></div>
      <div className='item'>
      <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor='file'>
                <img src={avatar.url || "./avatar.png"} alt="userimg"/>
                Upload an Image</label>
            <input type="file"  id="file" style={{display:'none'}} onChange={handleAvatar} />
            <input type="text" name="username"  placeholder='Username'/>
            <input type="text" name="email"  placeholder='Email'/>
            <input type="password" name="password"  placeholder='Password'/>
            <button disabled={loading}>{loading?"Loading":"Sign Up"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
