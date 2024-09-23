import React from 'react'
import "../CSS/Footer.css"
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaCreativeCommons } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    const goToContact =()=> {
        navigate('/contact');
    }

  return (
    <div className='footmain'>
        <div className='footmaindiv'>
            <div className='footfirst'>
                <div className='footspan'>
                    <h2>Company</h2>
                    <span>About</span>
                    <span onClick={goToContact}>Contact us</span>
                    <span>FAQs</span>
                </div>
                <div className='footspan'>
                    <h2>Quick links</h2>
                    <span>Find services</span>
                    <span>Pricing & Plans</span>
                    <span>List your business</span>
                </div>
                <div className='footspan'>
                    <h2>Resources</h2>
                    <span>Blog</span>
                    <span>Affiliate program</span>
                </div>
                <div className='footspan'>
                    <h2>More from Dutiful</h2>
                    <span>Dutiful jobs</span>
                </div>
            </div>
            <div className='footersecond'>
                <div className='second1'>
                    <span>Follow us</span>
                    <GrFacebookOption />
                    <PiInstagramLogoLight />
                    <FaTwitter />
                    <FaYoutube/>
                    < FaLinkedin />
                </div>
                <div className='second2'>
                    <span>Download the app</span>
                    <FaApple/>
                    <IoLogoGooglePlaystore />
                </div>
            </div>
            <div className='footerlast'>
                <div className='last1'>
                    <FaCreativeCommons />
                    <span>2022 Dutiful@</span>
                </div>
                <div className='last2'>
                    <span>Terms of Service</span>
                    <span> Privacy policy</span>
                    <span>Disclaimer</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer