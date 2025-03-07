import React, { useState, useEffect } from 'react';
import config from '../../api/schema.json';
import './style.scss';

const TestimonialsComponents = () => {
  const { testimonials } = config.schema;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.users_name.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.users_name.length) % testimonials.users_name.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__left">
        <h1>{testimonials.title}</h1>
        <p>{testimonials.subtitle}</p>
        {!isMobile && (
          <div className="buttons">
            <button className="prev" onClick={goToPrevious}>Prev</button>
            <button className="next" onClick={goToNext}>Next</button>
          </div>
        )}
      </div>

      <div className="testimonials__right">
        <div className="card-container" style={!isMobile ? { transform: `translateX(-${currentIndex * 290}px)` } : {}}>
          {testimonials.users_name.map((userName, index) => (
            <div className="card" key={index}>
              <h1>{userName}</h1>
              <p>{testimonials.users_lastname[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponents;
