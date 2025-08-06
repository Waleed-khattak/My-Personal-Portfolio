import React, { useRef } from 'react';
import { FaGamepad, FaMusic, FaCamera, FaBook, FaHiking, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "./Hobbies.css";

export default function HobbiesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='hobbies' className="hobbies container" data-aos="fade-up">
      <h3 className='section-title' data-aos="fade-down" data-aos-delay="100">Hobbies</h3>

      <div className="hobby-scroll-container hobby-content" data-aos="fade-up" data-aos-delay="200">
        <button className="scroll-btn left" onClick={() => scroll('left')} data-aos="zoom-in" data-aos-delay="300">
          <FaArrowLeft />
        </button>

        <div className="hobby-list" ref={scrollRef}>
          <div className="hobby-card" data-aos="zoom-in" data-aos-delay="400">
            <span className="hobby-icon"><FaGamepad color='#FF4C29'/></span>
            <p>Gaming</p>
          </div>
          <div className="hobby-card" data-aos="zoom-in" data-aos-delay="500">
            <span className="hobby-icon"><FaMusic color='#1DB954'/></span>
            <p>Music</p>
          </div>
          <div className="hobby-card" data-aos="zoom-in" data-aos-delay="600">
            <span className="hobby-icon"><FaCamera color='#E1306C'/></span>
            <p>Photography</p>
          </div>
          <div className="hobby-card" data-aos="zoom-in" data-aos-delay="700">
            <span className="hobby-icon"><FaBook color='#0077B5'/></span>
            <p>Reading</p>
          </div>
          <div className="hobby-card" data-aos="zoom-in" data-aos-delay="800">
            <span className="hobby-icon"><FaHiking color='#6A994E'/></span>
            <p>Hiking</p>
          </div>
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')} data-aos="zoom-out" data-aos-delay="900">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
