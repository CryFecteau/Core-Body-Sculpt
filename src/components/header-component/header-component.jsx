import React from 'react'
import './header-component.css'
import Logo from '../../assets/LogoO.png';

const HeaderComponent = () => {
    const handleMenuItemClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="header-container">
            <img className='header-logo' src={Logo} alt="logo" />
            <ul className="header-menu">
                <li onClick={() => handleMenuItemClick('home')}>Home</li>
                <li onClick={() => handleMenuItemClick('programs')}>Programs</li>
                <li onClick={() => handleMenuItemClick('about')}>About</li>
                <li onClick={() => handleMenuItemClick('memberships')}>Memberships</li>
                <li onClick={() => handleMenuItemClick('reviews')}>Reviews</li>
            </ul>
        </div>
    )
}

export default HeaderComponent