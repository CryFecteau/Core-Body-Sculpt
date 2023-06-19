import React from 'react'
import './reasons-component.css';
import { FiCheckSquare } from 'react-icons/fi';
import { SiNike, SiUnderarmour, SiAdidas, SiNewbalance, SiReebok } from 'react-icons/si';
import Rs1 from '../../assets/reason1.jpg';
import Rs2 from '../../assets/reason2.jpg';
import Rs3 from '../../assets/reason3.jpg';
import Rs4 from '../../assets/reason4.jpg';

export default function ReasonsComponent() {
    return (
        <div id='about' className="reasons-container">
            <div className="left-side-content">
                <img id='left-side-content-img3' src={Rs1} alt="reasons-img" />
                <img id='left-side-content-img1' src={Rs2} alt="reasons-img" />
                <img id='left-side-content-img2' src={Rs3} alt="reasons-img" />
                <img id='left-side-content-img0' src={Rs4} alt="reasons-img" />
            </div>
            <div className="right-side-content">
                <div className="right-side-title">
                    <span className='app-stroke-text'>Why </span>
                    <span>Start Now?</span>
                </div>
                <div className="right-side-text">
                    <div className='reason-detail-box'>
                        <span className='reason-icon'><FiCheckSquare /></span>
                        <span className='reason-detail'>+150 Fitness Experts</span>
                    </div>
                    <div className='reason-detail-box'>
                        <span className='reason-icon'><FiCheckSquare /></span>
                        <span className='reason-detail'>+125 Mental Health Coaches</span>
                    </div>
                    <div className='reason-detail-box'>
                        <span className='reason-icon'><FiCheckSquare /></span>
                        <span className='reason-detail'>1 Free Program For New Members</span>
                    </div>
                    <div className='reason-detail-box'>
                        <span className='reason-icon'><FiCheckSquare /></span>
                        <span className='reason-detail'>24/7 Access To All Location</span>
                    </div>
                    <span className='partners-title'>Our Partners:</span>
                    <div className='partners-icons'>
                        <SiNike />
                        <SiUnderarmour />
                        <SiAdidas />
                        <SiNewbalance />
                        <SiReebok />
                    </div>
                </div>
            </div>
        </div>
    )
}
