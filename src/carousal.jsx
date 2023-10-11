import React, { useState } from "react";
import "./CustomSlider.css"; // Import your custom CSS for styling

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CustomSlider() {
  const chips = [5, 10, 20, 100];
  const maxIndex = chips.length - 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <div className="custom-slider-container">
      <span onClick={handlePrev} className="slider-control text-white left">
        <FaArrowLeft />
      </span>
      <div className="custom-slider">
        {chips.map((chip, index) => (
          <div
            key={index}
            className={`slider-item ${
              index === currentIndex ? "center chip_selected" : "notcenter"
            }`}
          >
            <div className={"board-chip"}>
              <div className={`chip-${chip}`}>{chip}</div>
            </div>
          </div>
        ))}
      </div>
      <span onClick={handleNext} className="slider-control text-white right">
        <FaArrowRight />
      </span>
    </div>
  );
}

export default CustomSlider;
