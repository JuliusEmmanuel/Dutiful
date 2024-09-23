import React from 'react'
import "../CSS/Login.css"
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const goToSign2 =()=> {
        navigate('/sign2');
    }

    const goToForget =()=> {
        navigate('/Forgetpassword')
    }

  return (
    <div>
        <Header/>
            <div className='mainlog'>
                <div className='mainlogdivs'>
                    <div className='jump'>
                        <span>Jump right back in</span>
                        <h2>Login</h2>
                    </div>
                    <div className='jumpin'>
                        <span>Email</span>
                        <input type="text" />
                    </div>
                    <div className='jumpin'>
                        <span>Password</span>
                        <input type="text" />
                    </div>
                    <div className='jumpins'>
                        <p onClick={goToForget}>Forgot password?</p>
                    </div>
                    <button className='btn'>Login</button>
                    <p className='pet'>Don't have an account? <span onClick={goToSign2}>Sign up </span> </p>

                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Login