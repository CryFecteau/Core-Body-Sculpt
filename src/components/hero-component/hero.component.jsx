import React from 'react';
import './hero.component.css';
import HeaderComponent from '../header-component/header-component';
import { motion } from 'framer-motion';
import HeroImg from '../../assets/hero1.png';
import HeroBackImg from '../../assets/hero2.png';
import { BsGraphUpArrow } from 'react-icons/bs';
import { GiWeightLiftingUp } from 'react-icons/gi'

const HeroComponent = () => {
    const transition = { type: 'spring', duration: 3 };
    return (
        <div className="hero-container" id='home'>
            <div className="app-blur hero-blur"></div>
            <div className="left-hero-content">
                <HeaderComponent />
                <div className="hero-ad-container">
                    <motion.div
                        className='ad-background'
                        initial={{ left: '1rem' }}
                        whileInView={{ left: '19.5rem' }}
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
                        <span>We believe that a healthy mind is the foundation of a healthy body.</span>
                    </div>
                </div>
                <div className="hero-figures">
                    <div className='figure-box'>
                        <span className='figure-title'>+275</span>
                        <span className='figure-subtitle'>Experts</span>
                    </div>
                    <div className='figure-box'>
                        <span className='figure-title'>+1549</span>
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
                <motion.div
                    className="hero-right-img"
                    initial={{ right: '-1rem', top: '3rem' }}
                    whileInView={{ right: '3rem', top: '7rem' }}
                    transition={{ ...transition }}
                >
                    <span id='right-img'><GiWeightLiftingUp /></span>
                    <span id='img-top-text'>Strong.</span>
                    <span id='img-middle-text'>Fit.</span>
                    <span id='img-bottom-text'>Unleashed.</span>
                </motion.div>
                <img id='center-img' src={HeroImg} alt="hero-img" />
                <motion.img
                    initial={{ right: '10rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={{ ...transition }}
                    id='left-img'
                    src={HeroBackImg}
                    alt="hero-img" />
                <motion.div
                    className="hero-tip-container"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={{ ...transition }}
                >
                    <span id='tip-img'><BsGraphUpArrow /></span>
                    <div className="tip-text">
                        <span id='tip-title'>Studies have shown:</span>
                        <span id='tip-subtitle'>Prioritizing both mental and physical health, creates a higher success rate in enhancing overall well-being. </span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroComponent;