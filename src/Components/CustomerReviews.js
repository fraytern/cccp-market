import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomerReviews.css';

const reviews = [
  {
    comment: 'Place is awesome with a great selection and prices',
  },
  {
    comment: 'It is very clean, and the staff is friendly and accommodating. Definitely coming back.',
  },
  {
    comment: 'Great selection in produce AND giant-sized donuts are their regular size here.',
  },
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change to 4000 milliseconds (4 seconds)
  };

  const handleMoreReviews = () => {
    window.open('https://www.yelp.com/biz/cccp-market-plano', '_blank');
  };

  return (
    <div className="customer-reviews">
      <h2>Hear From Our Customers!</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </Slider>
      <button className="more-reviews-btn" onClick={handleMoreReviews}>
        More Reviews on Yelp
      </button>
    </div>
  );
};

export default CustomerReviews;
