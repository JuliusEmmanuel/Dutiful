import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { CiUser } from "react-icons/ci";
import { FaWarehouse } from "react-icons/fa";
import "../CSS/Sign2.css"

const Sign2 = () => {
  return (
    <div>
        <Header/>
        <div className='sign'>
            <div className='signmain'>
              <div className='sign1'>
                <span>Sign up for free </span>
                <h2>Get started</h2>
              </div>
              <div className='regular'>
                <div className='regular12'>
                    <CiUser />
                    <span>Regular user</span>
                </div>
                <div className='regular21'>
                  <FaWarehouse />
                  <span>Service provider</span>
                </div>
              </div>
              <div className='regularform'>
                <div className='regularform1'>
                  <span>Full name</span>
                  <input type="text" />
                </div>
                <div className='regularform1'> 
                  <span>Email</span>
                  <input type="text" />
                </div>
                <div className='regularform1'>
                  <span>Phone number</span>
                  <input type="text" />
                </div>
                <div className='regularform1'>
                  <span>Password</span>
                  <input type="text" />
                </div>
                <div className='regularform1'>
                  <span>Re-enter Password</span>
                  <input type="text" />
                </div>
                <div className='regularform1'>
                  <p>I agree to Dutiful's <span>terms and condition</span> </p>
                </div>
              </div>
              <div className='signbtn'>
                <button>Sign up</button>
                <p>Already have an account? <span>Login</span> </p>
              </div>
              
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sign2