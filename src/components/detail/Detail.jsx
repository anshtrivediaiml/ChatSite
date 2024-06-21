import React from 'react'
import './Detail.css'

const Detail = () => {
  return (
    <div className='detail'>
          <div className="user">
            <img src="./avatar.png" alt=""/>
            <h2>John Doe</h2>
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
             <button>Block User</button>
              </div>  
    </div>
  )
}

export default Detail