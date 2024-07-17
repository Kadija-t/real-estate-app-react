import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
const [currentIndex, setCurrentIndex] = useState(0);
const imageStyle = {backgroundImage: `url(${images[currentIndex]})`};

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
   
  };
  useEffect(() =>{
    if (images.length === 1) {
      setCurrentIndex(0);
    }
  }, [images]);

  return (
    <>
    <div className="slide-container" style={imageStyle}></div>
    {images.length > 1 && (
    <div className="slide-nav">
        <i className="fa-solid fa-chevron-left" onClick={handlePrev}></i>
        <i className="fa-solid fa-chevron-right" onClick={handleNext}></i>
    </div>
  )}
    </>
  );
};

export default Slideshow;
