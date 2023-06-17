import React from 'react'
import './memerships-component.css';

export default function MemershipsComponent() {
    return (
        <div className='memberships-container'>
            <div className="app-blur membership-blur"></div>
            <div className='memberships-header'>
                <span className='app-stroke-text'>Transform Your</span>
                <span>Body And Mind</span>
                <span className='app-stroke-text'>Join Us Today</span>
            </div>

            <div className="memberships">
                <div className="membership-card">
                    <img src="https://via.placeholder.com/50" alt="membership-img" />
                    <span className='membership-name'>Starter Membership</span>
                    <span className='membership-price'>$ 34.99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>24/7 access to all locations</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Consultaion with a mental health coach</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Access to virtual workout library</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits </span>
                    </div>
                    <button className='app-btn'>Join Now</button>
                </div>
                <div className="membership-card">
                    <img src="https://via.placeholder.com/50" alt="membership-img" />
                    <span className='membership-name'>Pro Membership</span>
                    <span className='membership-price'>$ 54.99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Monthly nutrition guidance</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Consultaion with both mental and physical health coach</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Unlimited guest passes</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits </span>
                    </div>
                    <button className='app-btn'>Join Now</button>
                </div>
                <div className="membership-card">
                    <img src="https://via.placeholder.com/50" alt="membership-img" />
                    <span className='membership-name'>Premium Membership</span>
                    <span className='membership-price'>$ 99.99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>VIP access to spa and wellness services</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>10% discount on merchandise</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Exclusive access to fitness events, retreats, and more</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits </span>
                    </div>
                    <button className='app-btn'>Join Now</button>
                </div>
            </div>
        </div>
    )
}
