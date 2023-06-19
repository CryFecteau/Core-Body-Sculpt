import React from 'react'
import './header-component.css'
import Logo from '../../assets/LogoO.png';

const HeaderComponent = () => {
    return (
        <div id='home' className="header-container">
            <img className='header-logo' src={Logo} alt="logo" />
            <ul className="header-menu">
                <li>Home</li>
                <li >Programs</li>
                <li>About</li>
                <li>Memberships</li>
                <li>Reviews</li>
            </ul>
        </div>
    )
}

export default HeaderComponent