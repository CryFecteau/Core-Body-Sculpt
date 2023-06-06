import React from 'react'
import './hero.component.css'
import HeaderComponent from '../header-component/header-component';
import { motion } from 'framer-motion';
const HeroComponent = () => {
    const transition = { type: 'spring', duration: 3 };
    return (
        <div className="hero-container">
            <div className="app-blur hero-blur"></div>
            <div className="left-hero-content">
                <HeaderComponent />
                <div className="hero-ad-container">
                    <motion.div
                        className='ad-background'
                        initial={{ left: '-1rem' }}
                        whileInView={{ left: '300px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>Empower your body, uplift your mind.</span>
                </div>
                <div className="hero-heading-container">
                    <div>
                        <span className='app-stroke-text'>Unleash </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Inner Strength</span>
                    </div>
                    <div className="hero-phrase">
                        <span>In here, we believe that a healthy mind is the foundation of a healthy body.</span>
                    </div>
                </div>
                <div className="hero-figures">
                    <div className='figure-box'>
                        <span className='figure-title'>+300</span>
                        <span className='figure-subtitle'>Experts</span>
                    </div>
                    <div className='figure-box'>
                        <span className='figure-title'>+1500</span>
                        <span className='figure-subtitle'>Members Joined</span>
                    </div>
                    <div className='figure-box'>
                        <span className='figure-title'>+75</span>
                        <span className='figure-subtitle'>Fitness Programs</span>
                    </div>
                </div>
                <div className='hero-button-container'>
                    <button id='hero-start-btn' className='app-btn'>Get Started</button>
                    <button id='hero-learn-btn' className='app-btn'>Learn More</button>
                </div>
            </div>
            <div className="right-hero-content">
                <button id='hero-join-btn' className="app-btn">Join Now</button>
                <motion.div
                    className="hero-right-img"
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={{ ...transition }}
                >
                    <img id='right-img' src="https://via.placeholder.com/200" alt="hero-img" />
                    <span id='img-top-text'>Words</span>
                    <span id='img-bottom-text'>Words</span>
                </motion.div>
                <img id='center-img' src="https://via.placeholder.com/500" alt="hero-img" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={{ ...transition }}
                    id='left-img'
                    src="https://via.placeholder.com/500"
                    alt="hero-img" />
                <motion.div
                    className="hero-tip-container"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={{ ...transition }}
                >
                    <img id='tip-img' src="https://via.placeholder.com/50" alt="tip-img" />
                    <div className="tip-text">
                        <span id='tip-title'>Tip of the day</span>
                        <span id='tip-subtitle'>Words</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroComponent;