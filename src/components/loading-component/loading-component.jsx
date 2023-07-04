import React, { useEffect, useState } from 'react'
import './loading-component.css';

export default function LoadingComponent({ hasUserEntered }) {
    const [buttonText, setButtonText] = useState('Loading...');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setButtonText('Get Started')
            setIsButtonDisabled(false);
        }, 3000)
    }, [])
    const handleEnterClick = () => {
        hasUserEntered(true);
    }
    return (
        <div className='loading'>
            <div className="loading-card">
                <span className='loading-title'>Welcome to Core Body Fitness</span>
                <span className='loading-body'>This responsive web application is a mock fitness site created to showcase React, CSS, and Framer Motion. Feel free to explore and interact with the site, but keep in
                    mind that it's for demonstration purposes only. Thank you for visiting!
                </span>
                <span className='loading-subtitle'>- Crystal Fecteau </span>
                <div className='loading-footer'>
                    <div className="loader"></div>
                    <button
                        onClick={handleEnterClick}
                        disabled={isButtonDisabled}
                        className={`${isButtonDisabled ? 'loading-btn-disabled' : 'loading-btn'}`}
                    >{buttonText}</button>
                </div>
            </div>
        </div>
    )
}
