import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const slideImages = [
  {
    img: require("./images/a.jpg"),
  },
  {
    img: require("./images/h.jpg"),
  },
  {
    img: require("./images/f.jpg"),
  },
];
function Slider() {
  const [current, setCurrent] = useState(0);
  const length = slideImages.length;

  if (!Array.isArray(slideImages) || slideImages.length <= 0) {
    return null;
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {slideImages.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="home_image" src={slide.img} alt="img" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
