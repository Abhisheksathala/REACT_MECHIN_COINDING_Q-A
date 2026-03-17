import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Starcomponent = ({ noOfstars = 5 }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  function handleClick(getindex) {
    setRating(getindex);
  }
  function handleMouseEnter(getindex) {
    setHover(getindex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div>
      <h1 className="text-4xl">Starcomponent</h1>
      <div className="flex gap-4">
        {[...Array(noOfstars)].map((_, index) => {
          index += 1;
          return (
            <>
              <FaStar
                key={index}
                className={
                  index <= (hover || rating)
                    ? " text-yellow-400 border border-black text-3xl"
                    : "text-green-100 text-3xl"
                }
                onClick={() => {
                  handleClick(index);
                }}
                onMouseEnter={() => {
                  handleMouseEnter(index);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(index);
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Starcomponent;
