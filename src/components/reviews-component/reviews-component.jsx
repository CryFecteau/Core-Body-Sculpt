import React from 'react'
import './reviews-component.css';

// const [selectedReview, setSelectedReview] = useState(0);
// const reviewsLength = reviews.length;
// onClick=(()=>{selectedReview === 0 ? setSelectedReview(reviewsLength -1) : setSelectedReview((prev) => prev - 1)})
// onClick=(()=>{selectedReview === length - 1 ? setSelectedReview(0) : setSelectedReview((prev) => prev + 1)})
export default function ReviewsComponent() {
    return (
        <div className="reviews-container">
            <div className="reviews-left-side-content">
                <span className='app-stroke-text reviews-header'>Feedback From</span>
                <span className='reviews-header'>Our Valued Clients</span>
                <span className='review'>
                    Review: Lorem ipsum dolor sit, amet consectetur adipisicing elit. A architecto perferendis illo maxime explicabo velit quam non nobis error, praesentium amet illum sapiente, aspernatur, repellat saepe recusandae animi nihil officiis.
                </span>
                <span>
                    <span>Name Here </span>
                    - Job Title
                </span>
            </div>
            <div className="reviews-right-side-content">
                <div className="review-border"></div>
                <div className="review-background"></div>
                <img className='client-img' src="https://via.placeholder.com/50" alt="review-img" />
                <div className="review-arrows">
                    <img id='left-arrow' src="https://via.placeholder.com/50" alt="arrow-img" />
                    <img id='right-arrow' src="https://via.placeholder.com/50" alt="arrow-img" />
                </div>
            </div>
        </div>
    )
}
