import React from 'react'
import "../CSS/Otp.css"
import Header from './Header'
import Footer from './Footer'
import { MdOutlineAttachEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Otp = () => {

    const navigate = useNavigate();

    const goToConfirmotp =()=> {
        navigate('/confirmotp');
    }

  return (
    <div>
        <Header/>
            <div className='otp'>
                <div className='otpmain' >
                    <div className='icon'>
                        <MdOutlineAttachEmail  style={{size:"30 "}}/>
                    </div>
                    <span>An otp code has been sent to segunsolaru@gmail.com</span>
                    <span>Check your email to get the code</span>
                    <button onClick={goToConfirmotp}>Next</button>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Otp