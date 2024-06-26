import React from 'react'
import './Detail.css'
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Detail = () => {
const {chatId,user,isCurrentUserBlocked,isReceiverBlocked,changeBlock}=useChatStore();
const {currentUser}=useUserStore();

  const handleBlock=async()=>{
    if(!user) return;

    const userDocRef=doc(db,"users",currentUser.id);

    try{
      await updateDoc(userDocRef,{
        blocked:isReceiverBlocked? arrayRemove(user.id):arrayUnion(user.id),
      });
      changeBlock(user.id);
    }catch(err){
      console.log(err)
    }

  }
  return (
    <div className='detail'>
          <div className="user">
            <img src={user?.avatar?user.avatar:"./avatar.png"} alt=""/>
            <h2>{user?.username}</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
              <div className='option'>
                <div className="title">
                  <span>Chat Settings</span>
                  <img src="./arrowUp.png" alt=""/>
                </div>
              </div>
              <div className='option'>
                <div className="title">
                  <span>Privacy & help</span>
                  <img src="./arrowUp.png" alt=""/>
                </div>
              </div>
              <div className='option'>
                <div className="title">
                  <span>Shared photos</span>
                  <img src="./arrowDown.png" alt=""/>
                </div>
                <div className='photos'>
                  <div className="photoItem">
                    <div className="photoDetail">
                    <img src="https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>  
                  <span>photo_2024_01.png</span>
                    </div>
                  <img src="./download.png" alt="" className='deleteIcon'/>
                  </div>
                  <div className="photoItem">
                    <div className="photoDetail">
                    <img src="https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>  
                  <span>photo_2024_01.png</span>
                    </div>
                  <img src="./download.png" alt="" className='deleteIcon'/>
                  </div>
                  <div className="photoItem">
                    <div className="photoDetail">
                    <img src="https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>  
                  <span>photo_2024_01.png</span>
                    </div>
                  <img src="./download.png" alt="" className='deleteIcon'/>
                  </div>
                  <div className="photoItem">
                    <div className="photoDetail">
                    <img src="https://images.pexels.com/photos/313032/pexels-photo-313032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>  
                  <span>photo_2024_01.png</span>
                    </div>
                  <img src="./download.png" alt="" className='deleteIcon'/>
                  </div>
                </div>
              </div>
              <div className='option'>
                <div className="title">
                  <span>Shared Files</span>
                  <img src="./arrowUp.png" alt=""/>
                </div>
              </div>
             <button onClick={handleBlock}>{isCurrentUserBlocked?"You are blocked":isReceiverBlocked?" User blocked":"Block User"}</button>
             <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
              </div>  
    </div>
  )
}

export default Detail
