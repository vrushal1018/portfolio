import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

export default function Skills() {
  const skillList = [
    { name: 'HTML', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 75 },
    { name: 'Git', icon: <FaGit />, level: 70 },
    { name: 'GitHub', icon: <FaGithub />, level: 75 },
    { name: 'Firebase', icon: <FaDatabase />, level: 65 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 50 },
    { name: '.NET', icon: <SiDotnet />, level: 40 }
  ];

  return (
    <section id="skills" className="skills-section fade-in">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillList.map((skill, i) => (
            <div key={i} className="skill-item" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
