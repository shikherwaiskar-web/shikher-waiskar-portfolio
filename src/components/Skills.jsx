import React, { useState, useEffect } from 'react';
import { GitBranch } from 'lucide-react';

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  const skillsData = [
    { name: 'Java', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Spring Framework', level: 75 },
    { name: 'Git / GitHub', level: 85 },
    { name: 'Eclipse', level: 80 }
  ];

  useEffect(() => {
    // Start animation on mount
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills">
      <span className="eyebrow">Expertise</span>
      <h2>
        <GitBranch size={20} className="section-title-icon" /> Skills
      </h2>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-track">
              <div 
                className="skill-bar" 
                style={{ width: animate ? `${skill.level}%` : '0%' }}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
