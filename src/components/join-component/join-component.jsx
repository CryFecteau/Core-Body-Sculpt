import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './join-component.css';

export default function JoinComponent() {
    const emailForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fcmv7v7', 'template_huyr066', emailForm.current, 'a-rxDe7GeUrKmdcPi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='join-container'>
            <div className="join-left-side-content">
                <hr className='join-hr' />
                <div className='join-header'>
                    <span className='app-stroke-text'>Embark On A</span>
                    <span>Transformative</span>
                </div>
                <div className='join-header'>
                    <span>Fitness</span>
                    <span className='app-stroke-text'>Journey</span>
                </div>
            </div>
            <div className="join-right-side-content">
                <form ref={emailForm} className='join-form' onSubmit={sendEmail}>
                    <input name='user_email' type="email" placeholder='Enter Your Email To Start' />
                    <button className='app-btn join-btn' type='submit'>Join Now</button>
                </form>
            </div>
        </div>
    )
}
