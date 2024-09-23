import React from 'react'
import "../CSS/Contact.css"
import Header2 from './Header2'
import Footer from './Footer'
import { BiMessageCheck } from "react-icons/bi";
import { FaRegAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
        <Header2/>
            <div className='get'>
                <h2>Get in touch</h2>
                <span>We are here to support you throughout the process of getting your business listed</span>
            </div>
            <div className='contact'>
                <div className='concat'>
                    <div className='concard'>
                        <span> <BiMessageCheck /> Customer support</span>
                        <p>Please fill out the form below</p>
                    </div>
                    <div className='concard'>
                        <span> <FaRegAddressBook/> Business address</span>
                        <p>Suites (C113 & C114) Akord Shopping Mall <br /> Bogije,  Elemoro, 101001, <br /> Lagos, Nigeria</p>
                    </div>
                    <div className='concard'>
                        <span> <FiPhoneCall /> Phone number</span>
                        <p>+234 903 921 6724</p>
                    </div>
                </div>
            </div>
            <div className='conform'>
                <div className='confill'>
                    <div className='fill'>
                        <span>Full Name</span>
                        <input type="text" />
                    </div>
                    <div className='fill'>
                        <span>Email</span>
                        <input type="text" />
                    </div>
                    <div className='fill'>
                        <span> Business type (Optional)</span>
                        <input type="text" />
                    </div>
                    <div className='fill'>
                        <span>subject</span>
                        <input type="text" /> 
                    </div>
                    <div className='message'>
                        <span>Write your message</span>
                        <input type="text" />
                    </div>
                    <button>Send Message</button>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Contact