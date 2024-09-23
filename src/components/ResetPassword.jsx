import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "../CSS/Resetpassword.css"

const ResetPassword = () => {
  return (
    <div>
        <Header/>
            <div className='reset'>
                <div className='resetdiv'>
                    <div className='reset1'>
                        <h2>Reset Password</h2>
                        <span>Set your new password</span>
                    </div>
                    <div className='reset2'>
                       <div className='reset22'>
                            <span>Enter new password</span>
                            <input type="text" />
                       </div>
                       <div className='reset22'>
                            <span>Re-enter new password</span>
                            <input type="text" />
                       </div>

                    </div>
                    <div className='reset3'>
                        <button>Reset password</button>
                        <p>or <span>Create new account</span></p>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default ResetPassword