import React from "react";
import useProducts from "../../hooks/useProduct";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useProducts();
  return (
    <div>
      <h1 className="text-5xl text-center my-5">What Our Customers Say...</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
