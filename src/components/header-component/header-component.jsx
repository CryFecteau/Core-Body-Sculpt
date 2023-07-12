import React, { useState } from 'react'
import './header-component.css'
import Logo from '../../assets/LogoO.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuItemClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMenuIconClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }
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
            <span className='header-menu-small' onClick={handleMenuIconClick}><GiHamburgerMenu />
            </span>
            {isMenuOpen && <div className='menu-box'>
                <ul className="header-menu-small-list">
                    <li onClick={() => handleMenuItemClick('home')}>Home</li>
                    <li onClick={() => handleMenuItemClick('programs')}>Programs</li>
                    <li onClick={() => handleMenuItemClick('about')}>About</li>
                    <li onClick={() => handleMenuItemClick('memberships')}>Memberships</li>
                    <li onClick={() => handleMenuItemClick('reviews')}>Reviews</li>
                </ul>
            </div>}

        </div>
    )
}

export default HeaderComponent