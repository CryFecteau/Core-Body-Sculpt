import React from 'react';
import './programs-component.css';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaWeight, FaHeartbeat, FaBrain } from "react-icons/fa";
import { MdFitnessCenter } from 'react-icons/md';

export default function ProgramsComponent() {
    return (
        <div id='programs' className="programs-container">
            <div className="programs-header-container">
                <span className='app-stroke-text'>Unlock Your</span>
                <span>Fitness</span>
                <span className='app-stroke-text'>Goals With Us</span>
            </div>
            <span className='programs-subheader'>Find a program that fits you</span>
            <div className="programs-categories-container">
                <div className="programs-category">
                    <span className='category-icon'><MdFitnessCenter /></span>
                    <span className='category-heading'>Beginners Program</span>
                    <span className='category-detail'>Our Beginners Program is designed specifically for individuals who are new to fitness or have limited experience with exercise. Whether you're stepping into a gym for the first time or looking to restart your fitness journey, this program will provide you with the guidance and support you need to kickstart a healthy lifestyle.</span>
                    <div className="join-now-btn">
                        <span>Get Started</span>
                        <span className='btn-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                </div>
                <div className="programs-category">
                    <span className='category-icon'><FaWeight /></span>
                    <span className='category-heading'>Weight Loss Program</span>
                    <span className='category-detail'>We understand that staying motivated can be challenging, especially when embarking on a weight loss journey. Our trainers will provide the necessary support, encouragement, and accountability to keep you on track. We'll celebrate your milestones, address any setbacks, and keep you focused on your long-term goals.</span>
                    <div className="join-now-btn">
                        <span>Get Started</span>
                        <span className='btn-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                </div>
                <div className="programs-category">
                    <span className='category-icon'><FaBrain /></span>
                    <span className='category-heading'>Mind-Body Connection</span>
                    <span className='category-detail'>Our program emphasizes the mind-body connection, teaching you to listen to your body, understand its limitations, and respect its needs. Through mindful movement and focused breathing techniques, you'll learn to connect with your body on a deeper level, enhancing your overall mobility experience.</span>
                    <div className="join-now-btn">
                        <span>Get Started</span>
                        <span className='btn-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                </div>
                <div className="programs-category">
                    <span className='category-icon'><FaHeartbeat /></span>
                    <span className='category-heading'>High-Intensity Interval Training</span>
                    <span className='category-detail'>Joining our HIIT Program means becoming part of a supportive and energetic community. You'll sweat it out alongside like-minded individuals who are equally committed to their fitness journey. Our trainers will keep you motivated, inspired, and accountable throughout each challenging session</span>
                    <div className="join-now-btn">
                        <span>Get Started</span>
                        <span className='btn-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
