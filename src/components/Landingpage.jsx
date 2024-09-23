import React from 'react'
import "../CSS/Landingpage.css"
import Header2 from './Header2'
import Footer from './Footer'
import Group698 from "../components/images/Group 698.png"
import Ellipse30 from '../components/images/Ellipse 30.png'
import frame723 from '../components/images/Frame 723.png'
import calender from '../components/images/Calendar.png'
import listing from '../components/images/Listing mockup 1.png'
import { RiCompassDiscoverLine } from "react-icons/ri";
import { BsChatDotsFill } from "react-icons/bs";
import { RiChatQuoteFill } from "react-icons/ri";

const Landingpage = () => {
  return (
    <div>
        <Header2/>
            <div className='herosection'>
                    <div className='herosec'>
                        <div className='hero1'>
                            <h2>List and grow your business <br />
                            with just few clicks</h2>
                            <span>Eliminate manual work and save time by listing your business <br /> or service on the best business directory in Nigeria.</span>
                        </div>
                        <div className='hero2'>
                            <img src={Group698} alt="" />
                        </div>
                    </div>
            </div>
            <div className='herosec2'>
                <div className='herosec'>
                    <div className='hero2'>
                        <img src={Ellipse30} alt="" />
                    </div>
                    <div className='hero1'>
                        <h2>Collect reviews and ratings <br /> from customers</h2>
                        <span>Accelerate your business reputation by 90% and gain social <br /> proof through reviews and rating requested from customers.</span>
                    </div>
                </div>
            </div>
            <div className='herosec4'>
                <div className='herosec41'>
                        <div className='list'>
                            <img src={listing} alt="" />
                        </div>
                        <div className='card'>
                            <div className='card1'>
                                <RiCompassDiscoverLine />
                                <h2>Get discovered</h2>
                                <span>Dutiful is more than just a business directory; it also <br /> enhances yyour web profile. the platform make use of SEO <br /> techniques to boost each listing performance's in the SERPs, <br /> providing an business the chance to rank, regardless of how <br /> strong their current online present is.  </span>
                            </div>
                            <div className='card2'>
                                <BsChatDotsFill />
                                <h2>Instant chat</h2>
                                <span>You will be able to chat and send voice recordings with <br /> potentials and existing customers, including managing your <br /> capture leads anytime, anywhere via the platform </span>
                            </div>
                            <div className='card1'>
                                <RiChatQuoteFill />
                                <h2>Quotations</h2>
                                <span>in addition to providing customers with access to <br /> information, offering customers quotation is very <br /> advantageous to the way you conduct your business. on <br /> Dutiful you will be able to send and receive quotation from <br /> customers - an important step in lead management.</span>
                            </div>
                        </div>
                </div>
            </div>
            <div className='herosec3'>
                <div className='herosec'>
                    <div className='hero25'>
                        <div className='hero25in '>
                            <img src={frame723} alt="" className='this' />
                            <img src={calender} alt="" className='that' />
                        </div>
                        <div className='hero25out'>
                            <span>13:30</span><span>14:00</span><span>14:30</span><span style={{backgroundColor:" rgb(83,47,130)", color:"white"}}>15:00</span>
                        </div>
                    </div>
                    <div className='hero1'>
                        <h2>Accept and sell appointnments</h2>
                        <span>Let customer build their own appointnment or consultation. <br /> Start accepting payments for appointnments through your <br /> booking page</span>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Landingpage