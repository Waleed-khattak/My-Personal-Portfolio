import React from 'react';
import "./Skills.css";
import { FaLaptopCode, FaProjectDiagram, FaVideo, FaDatabase, FaBullhorn, FaCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills container" data-aos="fade-up">
        <h2 className="section-title" data-aos="fade-down" data-aos-delay="100">
          Skills
        </h2>
        <div className="skills-content container">
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
            <i className="skill-item-icon"> <FaLaptopCode color='#007ACC' /></i>
            <h3>Front-End Development</h3>
            <p>Creating responsive, user-friendly interfaces with modern web technologies.</p>
          </div>

          <div className="skill-item" data-aos="zoom-out" data-aos-delay="300">
            <i className="skill-item-icon"> <FaDatabase color='#0064a5' /> </i>
            <h3>Back-end Delopment</h3>
            <p>Building robust server-side systems and APIs for seamless data management.</p>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
            <i className="skill-item-icon"> <FaProjectDiagram color='#6C63FF'/></i>
            <h3>System Architect Design</h3>
            <p>Designing scalable and efficient software architectures.</p>
          </div>

          <div className="skill-item" data-aos="zoom-out" data-aos-delay="500">
            <i className="skill-item-icon"> <FaVideo color='#FF0000' /></i>
            <h3>Content Creation</h3>
            <p>Producing engaging content to connect with audiences.</p>
          </div>

          <div className="skill-item" data-aos="zoom-in" data-aos-delay="600">
            <i className="skill-item-icon"> <FaBullhorn color='#FF8C00'/></i>
            <h3>Digital Marketing</h3>
            <p>Driving brand growth through targeted online campaigns.</p>
          </div>

          <div className="skill-item" data-aos="zoom-out" data-aos-delay="700">
            <i className="skill-item-icon"> <FaCode color="#E34F26" /></i>
            <h3>Programmer</h3>
            <p>Developing clean, effective code to solve problems.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills;
