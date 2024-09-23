import React from 'react'
import '../CSS/Forgetpassword.css'
import Header from './Header'
import Footer from './Footer'
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Forgetpassword = () => {

    const navigate = useNavigate();

    const goToOtp =()=> {
        navigate('/Otp');
    }

    const goToLogin =()=> {
        navigate('/Login')
    }

  return (
    <div>
        <Header/>
            <div className='forget'> 
                <div className='forgetdiv'>
                    <h2>Forget password</h2>
                    <p>Enter your email and we will send you a mail on how to reset your password.</p>
                    <div className='forgetinput'>
                        <span>Email</span>
                        <input type="text"  />
                    </div>
                    <button onClick={goToOtp}>Send email</button>
                    <p className='myp'> or <span onClick={goToLogin}> Login </span></p>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Forgetpassword