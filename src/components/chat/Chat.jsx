import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';

const Chat = () => {
  const [emojibutton,setEmojiButton]=useState(false);
  const [text,setText]=useState('');
  const [chat,setChat]=useState();
  const {chatId}=useChatStore();
  const {currentUser}=useUserStore();

  const endRef= useRef(null);

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:'smooth'});
  },[])

  useEffect(()=>{
    const unSub=onSnapshot(doc(db,"chats",chatId),(res)=>{
      setChat(res.data());
    })

    return ()=>{
      unSub();
    }
  },[chatId])

  console.log(chat);
  const handleEmoji=(e)=>{
   setText((prev)=>prev+e.emoji);
   setEmojiButton(false);
  }

  const handleSend=async()=>{
     if(text==='')return;
     try{
       await updateDoc(doc(db,"chats",chatId),{
        messages:arrayUnion({
          senderId:currentUser.id,
          text,
          createdAt:new Date(),
        })
       }) 
     }
     catch(err){
      console.log(err);
     }
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
        {
          chat?.messages?.map((msg)=>{
            <div className="message own" key={msg?.createdAt}>
          <div className='texts'>
         {msg.img &&<img src={msg.img}>
          </img>}
            <p>
              {msg.text}
            </p>
              <span>1 min ago</span>
          </div>
        </div>
          })
          }
        <div ref={endRef}></div>
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
        <button className='sendButton' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Chat
