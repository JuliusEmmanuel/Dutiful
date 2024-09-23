import React from 'react'
import "../CSS/Business.css"
import Header2 from './Header2'
import Footer from './Footer'
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";


const Business = () => {
  return (
    <div>
        <Header2/>
            <div className='business1'>
                <h2>Plans to Suit Your Business Budget</h2>
                <span>Our fully organized plans deliver valuable content that showcase your service and skills, drives <br /> Lead, cover all features, and give customers a clear idea to be able to choose your services. </span>
            </div>
            <div className='basics'>
                <div className='basiccard'>
                    <span>Basic</span>
                    <h2>Free</h2>
                    <button>Get started</button>
                    <span> <IoMdCheckmark /> Access to dashboard </span>
                    <span> <IoMdCheckmark /> Add up tp 2 businesses </span>
                    <span> <IoMdCheckmark /> Add up to 2 products/services </span>
                    <span> <IoMdCheckmark /> Add up to 2 images </span>
                    <span> <IoMdCheckmark /> Unlimited keywords </span>
                    <span> <IoMdCheckmark /> Display service hour and prices </span>
                    <span> <IoMdCheckmark /> Display address, contact and email </span>
                    <span> <IoMdCheckmark /> Instant chat </span>
                    <span> <IoMdCheckmark /> Review and ratings </span>
                    <span> <IoMdCheckmark /> Profile visibility </span>
                    <span> <IoMdCheckmark /> Instant notification </span>
                    <span> <IoMdCheckmark /> Display website and social network </span>
                    <span> <IoMdCheckmark /> Quotes </span>
                    <span> <IoMdCheckmark /> Bookmarks </span>
                </div>
                <div className='basiccard'>
                    <span>Standard</span>
                    <h2>NGN 20,000/year</h2>
                    <button>Get started</button>
                    <span> <IoMdCheckmark /> Access to dashboard </span>
                    <span> <IoMdCheckmark /> Add up tp 2 businesses </span>
                    <span> <IoMdCheckmark /> Add up to 2 products/services </span>
                    <span> <IoMdCheckmark /> Add up to 2 images </span>
                    <span> <IoMdCheckmark /> Unlimited keywords </span>
                    <span> <IoMdCheckmark /> Display service hour and prices </span>
                    <span> <IoMdCheckmark /> Display address, contact and email </span>
                    <span> <IoMdCheckmark /> Instant chat </span>
                    <span> <IoMdCheckmark /> Review and ratings </span>
                    <span> <IoMdCheckmark /> Profile visibility </span>
                    <span> <IoMdCheckmark /> Instant notification </span>
                    <span> <IoMdCheckmark /> Display website and social network </span>
                    <span> <IoMdCheckmark /> Quotes </span>
                    <span> <IoMdCheckmark /> Bookmarks </span>
                    <span> <IoMdCheckmark /> Number of profile views </span>
                    <span> <IoMdCheckmark /> Verify badge (purple) </span>
                    <span> <IoMdCheckmark /> Access and sell appoinment </span>
                    <span> <IoMdCheckmark /> Latest offers </span>
                </div>
                <div className='basiccard'>
                    <span>Premium</span>
                    <h2>NGN #30,000/year</h2>
                    <button>Get started</button>
                    <span> <IoMdCheckmark /> Access to dashboard </span>
                    <span> <IoMdCheckmark /> Add up tp 2 businesses </span>
                    <span> <IoMdCheckmark /> Add up to 2 products/services </span>
                    <span> <IoMdCheckmark /> Add up to 2 images </span>
                    <span> <IoMdCheckmark /> Unlimited keywords </span>
                    <span> <IoMdCheckmark /> Display service hour and prices </span>
                    <span> <IoMdCheckmark /> Display address, contact and email </span>
                    <span> <IoMdCheckmark /> Instant chat </span>
                    <span> <IoMdCheckmark /> Review and ratings </span>
                    <span> <IoMdCheckmark /> Profile visibility </span>
                    <span> <IoMdCheckmark /> Instant notification </span>
                    <span> <IoMdCheckmark /> Display website and social network </span>
                    <span> <IoMdCheckmark /> Quotes </span>
                    <span> <IoMdCheckmark /> Bookmarks </span>
                    <span> <IoMdCheckmark /> Number of profile views </span>
                    <span> <IoMdCheckmark /> Verify badge (Gold) </span>
                    <span> <IoMdCheckmark /> Access and sell appoinment </span>
                    <span> <IoMdCheckmark /> Latest offers </span>
                    <span> <IoMdCheckmark /> 24/7 service and support </span>

                </div>
            </div>

            <div className='featuremain'>
                <div className='feat'>
                    <h2>Features Overview</h2>
                    <div className='firstone'>
                        <div className='firstfirst'>
                            <span></span>
                            <h3>Features and Services</h3>
                        </div> 
                        <div className='secondfirst'>
                            <div className='secondbit'>
                                <span>Basic</span>
                                <button>Get started</button>
                            </div>
                            <div className='secondbit'>
                                <span>Standard</span>
                                <button>Get started</button>
                            </div>
                            <div className='secondbit'>
                                <span>Premium</span>
                                <button>Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className='final'>
                        <span>Access to dashboard</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>No. of business listings</span>
                        <p> 2 business</p>
                        <p> 6 business</p>
                        <p> 10 business</p>
                    </div>
                    <div className='final'>
                        <span>No. of product or services</span>
                        <p> 2 </p>
                        <p> 6 </p>
                        <p> 10</p>
                    </div>
                    <div className='final'>
                        <span>No. of images </span>
                        <p> 2</p>
                        <p> 4</p>
                        <p> 6</p>
                    </div>
                    <div className='final'>
                        <span>Keywords</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Display service hour & prices</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Display <address>, email & contact</address></span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Instant chat</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Reviews and ratings</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Profile visibility</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Instant notificaion</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Display website and social network</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Quotes</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Bookmarks</span>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Profile views</span>
                        <p> <FaXmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Verified badge</span>
                        <p> <FaXmark /></p>
                        <p> Pupple</p>
                        <p> Gold</p>
                    </div>
                    <div className='final'>
                        <span>Latest offers</span>
                        <p> <FaXmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>Accept and sell appoinment</span>
                        <p> <FaXmark /></p>
                        <p> <IoMdCheckmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                    <div className='final'>
                        <span>24/7 support</span>
                        <p> <FaXmark /></p>
                        <p> <FaXmark /></p>
                        <p> <IoMdCheckmark /></p>
                    </div>
                </div>
            </div>
        <Footer/>

    </div>
  )
}

export default Business