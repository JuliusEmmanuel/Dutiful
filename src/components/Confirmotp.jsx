import React from 'react'
import '../CSS/Confirmotp.css'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Confirmotp = () => {

    const navigate = useNavigate();

    const goToResetPassword =()=> {
        navigate('/resetpassword');
    }

  return (
    <div>
        <Header/>
            <div className='confirm'>
                <div className='confirmmain'> 
                    <div className='confirmfirst'>
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <span>Enter OTP that was sent to your email</span>
                    <span>segunsolaru@gmail.com</span>
                    <button onClick={goToResetPassword}>Confirm OTP</button>
                    <p className='myps'> Did't get a code? <span> Resend </span></p>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Confirmotp