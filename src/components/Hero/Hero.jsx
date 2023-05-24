import React from 'react';
import './Hero.css';
import {HiLocationMarker} from "react-icons/hi";
import CountUp from 'react-countup';

function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className="blur-element"></div>
      <div className="paddings innerWidth hero-container">
        {/* hero left */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>Discover <br />
            the Best <br /> 
            of Residence
            </h1>
          </div>
          <div className="hero-des">
            <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
            <span className='secondaryText'>Forget all difficulties in finding residence of you</span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className='button'>Search</button>
          </div>
          {/* stats */}
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Product</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span  className='secondaryText'>Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={25} />
                <span>+</span>
              </span>
              <span  className='secondaryText'>Award Winnings</span>
            </div>
          </div>
        </div>

        {/* hero right */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero.jpg" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}
export default Hero 