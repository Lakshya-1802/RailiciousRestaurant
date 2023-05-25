import React, { useState } from 'react';
// import reviewsData from './reviewdata'; // Import the data for reviews
import './review.css'
import paneer from '../Images/Delicacies/paneer.jpg' 
import pizza from '../Images/Delicacies/pizza.jpg' 
import veg from '../Images/Delicacies/veg (2).jpg' 

const reviewsData = [
    {
      name: "John Doe",
      image: {paneer},
      comment: "The coffee here is exceptional! I love the cozy atmosphere and friendly staff."
    },
    {
      name: "Jane Smith",
      image: {paneer},
      comment: "Seven Grams Caffe never disappoints. Their pastries are heavenly, and the coffee is always on point!"
    },
    {
      name: "Mike Johnson",
      image: {paneer},
      comment: "I've been a regular at Seven Grams Caffe for years. Their attention to detail and quality is unmatched."
    }
  ];

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviewsData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviewsData.length - 1 : prevSlide - 1));
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className='text-center'>Customer Reviews</h2><hr/>
        <div className="reviews-carousel">
          {reviewsData.map((review, index) => (
            <div className={`review ${index === currentSlide ? 'active' : ''}`} key={index}>
              <img src={review.image} alt={`Reviewer ${index + 1}`} />
              <h4>{review.name}</h4>
              <p className="review-text">{review.comment}</p>
            </div>
          ))}
          <button className="carousel-control prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
