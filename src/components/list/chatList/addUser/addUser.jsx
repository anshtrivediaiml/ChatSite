import React, { useState } from 'react'
import './addUser.css'
import { collection, query } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';
const addUser = () => {
  const [user,setUser]=useState(null)

  const handleSearch=async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const username=formData.get('username');
    try{
      const userRef=collection(db,'users');
      //create a query against a collection
      const query=query(userRef,where('username','==',username));

      const querySnapshot=await getDocs(query);

      if(!querySnapshot.empty){
       setUser(querySnapshot.docs[0].data());
      }

    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
       <input type="text" placeholder='Username' name="username" />
       <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
            <img src="./avatar.png" alt=""/>
            <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  )
}

export default addUser
