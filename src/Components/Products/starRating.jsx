import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); // Full stars count
  const hasHalfStar = rating % 1 !== 0; // If true, add half star
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center text-yellow-400">
      {/* Render full stars */}
      {Array(fullStars).fill().map((_, i) => (
        <FaStar key={i} />
      ))}

      {/* Render half star if needed */}
      {hasHalfStar && <FaStarHalfAlt />}

      {/* Render empty stars */}
      {Array(emptyStars).fill().map((_, i) => (
        <FaRegStar key={i + fullStars + 1} />
      ))}
    </div>
  );
};

export default StarRating;
