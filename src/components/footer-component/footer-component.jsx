import React from 'react'
import './footer-component.css'

export default function FooterComponent() {
    return (
        <div className='footer-container'>
            <hr className='footer-hr' />
            <div className='footer-content'>
                <div className="footer-social-media">
                    <img src="https://via.placeholder.com/50" alt="footer-img" />
                    <img src="https://via.placeholder.com/50" alt="footer-img" />
                    <img src="https://via.placeholder.com/50" alt="footer-img" />
                </div>
                <div className="footer-logo">
                    <img src="https://via.placeholder.com/50" alt="footer-img" />
                </div>
            </div>
            <div className="app-blur footer-blur-1"></div>
            <div className="app-blur footer-blur-2"></div>
        </div>
    )
}
