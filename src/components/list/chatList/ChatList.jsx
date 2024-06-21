import React, { useState } from 'react'
import './ChatList.css'

const ChatList = () => {
  const [addMode,setAddMode]=useState(false);
  return (
    <div className='chatList'>
        <div className='search'>
          <div className='searchBar'>
            <img src="/search.png" alt="search" />
            <input type="text" placeholder='search'/>
          </div>
          <img src={addMode ? "./minus.png":"./plus.png"} alt=""
          onClick={()=>setAddMode((prev)=>!prev) } className="add"
          />
          </div>  
          <div className='item'>
           <img  src={"./avatar.png"} alt=""/> 
           <div className='texts'>
            <span>Jane Doe</span>
             <p>Hello</p>
           </div>
            </div>    
          <div className='item'>
           <img  src={"./avatar.png"} alt=""/> 
           <div className='texts'>
            <span>Jane Doe</span>
             <p>Hello</p>
           </div>
            </div>    
          <div className='item'>
           <img  src={"./avatar.png"} alt=""/> 
           <div className='texts'>
            <span>Jane Doe</span>
             <p>Hello</p>
           </div>
            </div>    
    </div>
  )
}

export default ChatList
