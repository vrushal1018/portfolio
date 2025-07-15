import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "social media dashboard",
      description: "A responsive React + Tailwind CSS web app that provides real-time social media user data using RapidAPI. Users can select a platform, enter a username, and instantly fetch public profile information. Fully frontend-based and optimized for both mobile and desktop views.",
      technologies: ["React","tailwind","Rapid apis"],
      github: "https://github.com/vrushal1018/socialmediadashboard",
      demo: " https://socialmediadashboard-roan.vercel.app",
      image: "/images/movie-booking.png"
    },
    {
      title: "NUTS",
      description: "A modern, responsive website built with React.js and Tailwind CSS for a growing startup. This freelance project is currently under development, focusing on a clean UI, brand consistency, and mobile-first design.",
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      demo: " https://nuts-eta.vercel.app",
      image: "/images/portfolio.png"
    },
    // {
    //   title: "E-commerce Dashboard",
    //   description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and order processing capabilities.",
    //   technologies: ["React", "Redux", "Material-UI", "Chart.js"],
    //   github: "https://github.com/yourusername/ecommerce-dashboard",
    //   demo: "https://ecommerce-dashboard-demo.netlify.app",
    //   image: "/images/dashboard.png"
    // }
  ];
  
    return (
      <section id="projects" className="projects-section fade-in">
        <div className="projects-container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  }
  