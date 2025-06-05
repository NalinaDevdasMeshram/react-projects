import React from "react";
import { CiStar } from "react-icons/ci";
const StarRating = ({ noOfStar = 5 }) => {
  return (
    <div>
      <CiStar />
    </div>
  );
};

export default StarRating;
