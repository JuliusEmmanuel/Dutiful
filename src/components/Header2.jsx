import React from 'react'
import Group65 from "../components/images/Group 65.png"
import "../CSS/Header.css"
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header2 = () => {

  const navigate = useNavigate();

  const goToBusiness =()=> {
    navigate('/business');
  }

  const goToLanding =()=> {
    navigate('/');
  }

  const goToSign2 =()=> {
    navigate('/sign2');
  }

  const goToLogin =()=> {
    navigate('/login');
  }


  return (
    
    <div className='mainhead'>
        <div className='mainheaddiv'>
            <div className='headimg'>
                 <img src={Group65} alt="" onClick={goToLanding} />
            </div>
            <div className='headspans'>
              <IoSearchOutline />
              <span onClick={goToBusiness}>Business Directory</span>
              <span>Features</span>
              <span>Pricing</span>
              <span>Blog</span>
            </div>
            <div className='headbtn'>
              <button className='btn1' onClick={goToLogin}>Login</button>
              <button className='btn2' onClick={goToSign2}>Sign up</button>
            </div>
            
        </div>
    </div>
  )
}

export default Header2