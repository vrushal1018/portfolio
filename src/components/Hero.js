import './Hero.css';
import { useEffect, useRef } from 'react';
// import logo from '../assets/logo.svg';

export default function Hero() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'Web Creator'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];
      if (typedTextRef.current) {
        if (!isDeleting) {
          typedTextRef.current.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
          }
        } else {
          typedTextRef.current.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }
      }
      setTimeout(type, isDeleting ? 50 : 150);
    };

    type();
  }, []);

  return (
    <section className="hero fade-in">
      <div className="hero-content">
        <h1>Hello, I'm Vrushal </h1>
        <div className="typed-container">
          <p>I am a <span ref={typedTextRef}></span><span className="cursor">|</span></p>
        </div>
        <p className="hero-description">Focused on building beautiful web experiences</p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View Projects</a>
          <a href="/myresume.pdf" download className="btn secondary-btn">Download Resume</a>
        </div>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vrushal-pachupate-844570291" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
}
