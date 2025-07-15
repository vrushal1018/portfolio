import React from 'react';
import './About.css';
import { FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a passionate frontend developer and React learner from India, currently exploring web technologies to build meaningful user interfaces. I'm also building my knowledge in full-stack development.
          </p>

          <div className="education-section">
            <h3 className="section-title">Education</h3>
            <div className="education-item">
              <h4 className="degree-name">BSC (IT)</h4>
              <p className="institution-name">SAHYOG COLLEGE (THANE W), University of Mumbai</p>
              <p className="study-duration">2022 – Present (Expected Graduation 2025)</p>
              <p className="academic-performance">CGPA: 8.0</p>
              <div className="subjects-list">
                {[
                  'Web Development',
                  'ASP.NET',
                  'JAVA',
                  'PYTHON',
                  'C++',
                  'C',
                  'COMPUTER NETWORKS',
                  'DLA'
                ].map((subject, index) => (
                  <span key={index} className="subject-tag">{subject}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="section-title">Certifications</h3>
            <div className="certifications-grid">
              {[
                'CSS',
                'BOOTSTRAP',
                'JAVASCRIPT',
                'PYTHON STACK COURSE'
              ].map((cert, index) => (
                <div key={index} className="certification-card">
                  <h4>{cert}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h3 className="section-title">Achievements</h3>
            <div className="achievement-item">
              <FaTrophy className="achievement-icon" />
              <p>Best Presentation Award at College Tech Fest 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  