import React from 'react'
import Group65 from "../components/images/Group 65.png"
import "../CSS/Header.css"

const Header = () => {
  return (
    <div className='mainhead'>
        <div className='mainheaddiv'>
            <div className='headimg'>
                 <img src={Group65} alt="" />
            </div>
            <div className='headspans'>
              <span>Business Directory</span>
              <span>Features</span>
              <span>Pricing</span>
              <span>Blog</span>
            </div>
            <div className='headbtn'>
              <button className='btn1'>Login</button>
              <button className='btn2'>Sign up</button>
            </div>
            
        </div>
    </div>
  )
}

export default Header