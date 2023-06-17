import React from 'react'
import './reasons-component.css';
export default function ReasonsComponent() {
    return (
        <div id='reasons-container' className="reasons-container">
            <div className="left-side-content">
                <img id='left-side-content-img0' src="https://via.placeholder.com/500" alt="reasons-img" />
                <img id='left-side-content-img1' src="https://via.placeholder.com/500" alt="reasons-img" />
                <img id='left-side-content-img2' src="https://via.placeholder.com/500" alt="reasons-img" />
                <img id='left-side-content-img3' src="https://via.placeholder.com/500" alt="reasons-img" />
            </div>
            <div className="right-side-content">
                <div className="right-side-title">
                    <span className='app-stroke-text'>Why </span>
                    <span>Start Now?</span>
                </div>
                <div className="right-side-text">
                    <div className='reason-detail-box'>
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <span className='reason-detail'>+150 Fitness Experts</span>
                    </div>
                    <div className='reason-detail-box'>
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <span className='reason-detail'>+125 Mental Health Coaches</span>
                    </div>
                    <div className='reason-detail-box'>
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <span className='reason-detail'>1 Free Program For New Members</span>
                    </div>
                    <div className='reason-detail-box'>
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <span className='reason-detail'>24/7 Access To All Location</span>
                    </div>
                    <span className='partners-title'>Our Partners</span>
                    <div className='partners-icons'>
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                        <img src="https://via.placeholder.com/50" alt="reasons-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
