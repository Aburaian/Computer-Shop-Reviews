import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, image, comment, rate } = review;
  return (
    <div className="review-area">
      <div className="img-area">
        <img src={image} alt="" />
        <div className="comment-area">
          <h3 className="text-2xl font-semibold my-2">{name}</h3>
          <p className="p-2">"{comment}"</p>
          <p>
            <small className="text-2xl">Ratings: {rate}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
