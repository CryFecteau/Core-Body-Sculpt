import React from 'react'
import './footer-component.css'
import Logo from '../../assets/LogoO.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterComponent() {
    return (
        <div className='footer-container'>
            <hr className='footer-hr' />
            <div className='footer-content'>
                <div className="footer-social-media">
                    <BsFacebook className='media-icon' />
                    <BsInstagram className='media-icon' />
                    <BsTwitter className='media-icon' />
                </div>
                <div className="footer-logo">
                    <img src={Logo} alt="footer-img" />
                </div>
            </div>
            <div className="app-blur footer-blur-1"></div>
            <div className="app-blur footer-blur-2"></div>
        </div>
    )
}
