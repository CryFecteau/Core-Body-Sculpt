import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { reviewData } from '../../data/reviewData';
import './reviews-component.css';

export default function ReviewsComponent() {
    const transition = { type: 'spring', duration: 3 };
    const [selectedReview, setSelectedReview] = useState(0)
    const reviews = reviewData;
    const reviewsLength = reviews.length;

    return (
        <div id='reviews' className="reviews-container">
            <div className="reviews-left-side-content">
                <span className='app-stroke-text reviews-header'>Feedback From</span>
                <span className='reviews-header-bottom'>Our Valued Clients</span>
                <motion.span
                    className='review'
                    key={selectedReview}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ ...transition }}
                >
                    {reviewData[selectedReview].review}
                </motion.span>
                <span>
                    <span>{reviewData[selectedReview].name}</span>
                </span>
            </div>
            <div className="reviews-right-side-content">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition }}
                    className="review-border"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition }}
                    className="review-background"
                ></motion.div>
                <motion.img
                    className='client-img'
                    src={reviewData[selectedReview].image}
                    alt="review-img"
                    key={selectedReview}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ...transition }}
                />
                <div className="review-arrows">
                    <span id='left-arrow'
                        onClick={() => { selectedReview === 0 ? setSelectedReview(reviewsLength - 1) : setSelectedReview((prev) => prev - 1) }}
                    ><BsFillArrowRightSquareFill /></span>
                    <span id='right-arrow'
                        onClick={() => { selectedReview === reviewsLength - 1 ? setSelectedReview(0) : setSelectedReview((prev) => prev + 1) }}
                    ><BsFillArrowRightSquareFill /></span>
                </div>
            </div>
        </div>
    )
}
