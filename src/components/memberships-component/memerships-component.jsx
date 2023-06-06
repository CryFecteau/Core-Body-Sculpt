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
                    <span className='membership-name'>Name Here</span>
                    <span className='membership-price'>$ 99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 1</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 2</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 3</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits </span>
                    </div>
                    <button className='app-btn'>Join Now</button>
                </div>
                <div className="membership-card">
                    <img src="https://via.placeholder.com/50" alt="membership-img" />
                    <span className='membership-name'>Name Here</span>
                    <span className='membership-price'>$ 99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 1</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 2</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 3</span>
                        </div>
                    </div>
                    <div className='benifits-box'>
                        <span>See More Benifits </span>
                    </div>
                    <button className='app-btn'>Join Now</button>
                </div>
                <div className="membership-card">
                    <img src="https://via.placeholder.com/50" alt="membership-img" />
                    <span className='membership-name'>Name Here</span>
                    <span className='membership-price'>$ 99</span>
                    <div className='membership-features'>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 1</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 2</span>
                        </div>
                        <div className='feature'>
                            <img src="https://via.placeholder.com/50" alt="feature-img" />
                            <span className='feature-detail'>Feature 3</span>
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
