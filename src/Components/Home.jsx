import React, {useState, useEffect} from 'react';
import ProfileImg from '../assets/img/profile1.png';
import './Home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { BiWorld } from 'react-icons/bi';

const Home = () => {
  const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1000; // 1 second
    const increment = end / (duration / 30); 

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setProjectCount(end);
      } else {
        setProjectCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(counter);
  }, []);

  return (
    <>
      <section id="home" className="home" data-aos="fade-up">
        <div className="hero-section container" data-aos="fade-up" data-aos-delay="200">
          <div className="hero-main-content">
            <div className="img-wrapper" data-aos="zoom-in">
              <img src={ProfileImg} alt="Profile img" />
            </div>

            <h1 className="image-heading">Hi there, <br /> I'm Waleed Khattak <span className="image-heading-tagline" data-aos="zoom-in" data-aos-delay="300">__Software Engineer</span></h1>

            <p className="image-top-text" data-aos="zoom-out" data-aos-delay="400">Building clean, scalable, efficient code that solves real-world problems 🚀 </p>

            <div className="image-icon">
              <a href='https://www.linkedin.com/in/waleed-khattak/' target='_blank' className="FaPaperPlane"><FaLinkedin color='#08a4f8ff' /></a>
              <a href='https://github.com/waleed-khattak' target='_blank' className="FaPaperPlane"><FaGithub color='#181717' /></a>
              <a href='https://waleed-portfolio.free.nf/' target='_blank' className="FaPaperPlane"><BiWorld color="#679ffaff" /></a>
              <a href='mailto:khattak4422004@gmail.com' className="FaEnvelope"><FaEnvelope color="#55b2feff" /></a>
              <a href='https://www.upwork.com/freelancers/~01f64a910350a0c2a1?mp_source=share' target='_blank' className="FaPaperPlane"><SiUpwork color='#6FDA44' /></a>
            </div>

            <div className="image-project-count">
              <strong>{projectCount}+</strong> <br className='project-line-break' /> Projects
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home