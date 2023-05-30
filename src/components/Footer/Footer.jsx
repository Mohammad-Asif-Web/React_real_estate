import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120} />
                <span className='secondaryText'>
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL, 4571, USA</span>
                <div className="f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer;