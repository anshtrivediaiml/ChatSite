import React, { useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [emojibutton,setEmojiButton]=useState(false);
  const [text,setText]=useState('');

  const handleEmoji=(e)=>{
   setText((prev)=>prev+e.emoji);
   setEmojiButton(false);
  }
  return (
    <div className='chat'>
      <div className='top'>
        <div className="user">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src='./phone.png' alt=""/>
          <img src='./video.png' alt=""/>
          <img src='./info.png' alt=""/>
        </div>
      </div>

      <div className='center'>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae necessitatibus perferendis at architecto fugiat!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae necessitatibus perferendis at architecto fugiat!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae necessitatibus perferendis at architecto fugiat!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae necessitatibus perferendis at architecto fugiat!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae necessitatibus perferendis at architecto fugiat!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className='texts'>
          <img src="https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=300">
          </img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae necessitatibus perferendis at architecto fugiat!
            </p>
              <span>1 min ago</span>
          </div>
        </div>
      </div>


      <div className='bottom'>
        <div className="icons">
       <img src="./img.png"/>
       <img src="./camera.png"/>
       <img src="./mic.png"/>
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={(e)=>setText(e.target.value)} />
        <div className='emoji'>
          <img src="./emoji.png" alt="" onClick={()=>setEmojiButton(prev=>!prev)}/>

          <div className="picker">
      <EmojiPicker open={emojibutton} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
