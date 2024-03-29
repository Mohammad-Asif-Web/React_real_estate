import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth c-container">
            <div className="flexColStart c-left">
                <div className="orangeText">Our Contacts</div>
                <div className="primaryText">Easy to Contact us</div>
                <div className="secondaryText">We always ready to help by believe a good blace to live can make your life better</div>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 13</span>
                                </div>
                            </div>
                            <div className="button">Call Now</div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>021 123 145 13</span>
                                </div>
                            </div>
                            <div className="button">Chat Now</div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>021 123 145 13</span>
                                </div>
                            </div>
                            <div className="button">Message Now</div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>021 123 145 13</span>
                                </div>
                            </div>
                            <div className="button">Video Call Now</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact;