import React from 'react'
import './Header.css'

function Header() {
  return (
    <section className='h-wrapper'>
        <div className='paddings innerWidth h-container'>
            <img className='logo' src="./logo.png" alt="logo" width={100} />

            <div className="h-menu">
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>
            </div>
        </div>
    </section>
  )
}
export default Header