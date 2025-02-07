import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/Slide1.jpg';
import slider2 from '../../assets/Slider2.jpg';

const Slider = () => {
  const slides = [
    { image: slide1, alt: 'Slide 1' },
    { image: slider2, alt: 'Slide 2' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);

  }, [currentSlide, slides.length]);

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="relative w-full h-[500px]">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className={`absolute top-0 left-0 h-full w-full  object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="flex mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`h-2 w-2 mx-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
