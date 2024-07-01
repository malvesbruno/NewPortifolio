import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="image-carousel">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className='button_place'>
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext} className='bottom'>&gt;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;