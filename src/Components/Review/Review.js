import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
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
            <small className="text-2xl">
              Ratings:{" "}
              <Rating
                initialRating={rate}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
