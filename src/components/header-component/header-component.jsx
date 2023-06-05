import React from 'react'
import './header-component.css'

const HeaderComponent = () => {
    return (
        <div className="header-container">
            <img className='header-logo' src="https://via.placeholder.com/150" alt="logo" />
            <ul className="header-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </div>
    )
}

export default HeaderComponent