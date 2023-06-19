import React from 'react'
import './memerships-component.css';
import { LuCrown } from 'react-icons/lu';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { MdFitnessCenter } from 'react-icons/md';
import { FiCheckSquare } from 'react-icons/fi';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

export default function MemershipsComponent() {
    return (
        <div id='memberships' className='memberships-container'>
            <div className="app-blur membership-blur"></div>
            <div className='memberships-header'>
                <span className='app-stroke-text'>Transform Your</span>
                <span>Body And Mind</span>
                <span className='app-stroke-text'>Join Us Today</span>
            </div>

            <div className="memberships">
                <div className="membership-card">
                    <span className='membership-icon'><MdFitnessCenter /></span>
                    <span className='membership-name'>Starter Membership</span>
                    <span className='membership-price'>$ 34.99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>24/7 access to all locations</span>
                        </div>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>Consultaion with a mental health coach</span>
                        </div>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>Access to virtual workout library</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits</span>
                        <span className='box-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                    <button className='app-btn member-btn'>Join Now</button>
                </div>
                <div id='membership-pro' className="membership-card">
                    <span id='pro-icon' className='membership-icon'><LuCrown /></span>
                    <span className='membership-name'>Pro Membership</span>
                    <span className='membership-price'>$ 54.99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>Monthly nutrition guidance</span>
                        </div>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>Consultaion with both mental and physical health coach</span>
                        </div>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>Unlimited guest passes</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits</span>
                        <span className='box-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                    <button className='app-btn member-btn'>Join Now</button>
                </div>
                <div className="membership-card">
                    <span className='membership-icon'><GiWeightLiftingUp /></span>
                    <span className='membership-name'>Premium Membership</span>
                    <span className='membership-price'>$ 99.99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>VIP access to spa and wellness services</span>
                        </div>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>10% discount on merchandise</span>
                        </div>
                        <div className='feature'>
                            <span className="membership-check"><FiCheckSquare /></span>
                            <span className='feature-detail'>Exclusive access to fitness events, retreats, and more</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits</span>
                        <span className='box-icon'><MdOutlineKeyboardDoubleArrowRight /></span>
                    </div>
                    <button className='app-btn member-btn'>Join Now</button>
                </div>
            </div>
        </div>
    )
}
