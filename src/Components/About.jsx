import React from 'react';
import "./About.css";
import AboutImg from "../assets/img/profile.png";

const About = () => {
  return (
    <>
      <section id="about" className="about container" data-aos="zoom-in">
        <h2 className="section-title" data-aos="zoom-out" data-aos-delay="100">
          About
        </h2>

        <div className="about-content">
          <div
            className="about-left-content"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={AboutImg} alt="About img" width={200} height={200} />
          </div>

          <div
            className="about-right-content"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <p>
              Hi, I'm Waleed Khattak a passionate Full-Stack Developer and Digital Marketer with a strong drive to build modern, fast, and user-focused digital experiences.
              <br /> <br />
              With over 2 years of hands-on experience, I specialize in crafting responsive websites and intuitive interfaces using HTML, CSS, JavaScript and React. My journey began with simple lines of code, but it quickly evolved into a mission to design digital solutions.
            </p>

            <div className="about-items" data-aos="fade-up" data-aos-delay="400">
              <ul>
                <li>Age: 22</li>
                <li>City: Gujranwala</li>
                <li>Cast: Khattak</li>
                <li>Passion: Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
