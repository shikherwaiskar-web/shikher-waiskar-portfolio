import React from 'react';
import { GitCommit } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Computer Science Student',
      company: 'Self-Directed & Academic Learning',
      date: 'Present',
      description: 'Building backend engineering fundamentals — Java, Spring Boot, SQL, and data structures — while developing real projects and preparing for technical interviews.',
      status: 'Currently seeking opportunities',
      statusClass: 'badge-status'
    }
  ];

  return (
    <section id="experience">
      <span className="eyebrow">Journey</span>
      <h2>
        <GitCommit size={20} className="section-title-icon" /> Experience
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-title-row">
                  <span className="timeline-role">
                    {exp.role} <span style={{ color: 'var(--fg-subtle)', fontWeight: 400 }}>at {exp.company}</span>
                  </span>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                {exp.status && (
                  <div className="timeline-status" style={{ marginTop: '4px' }}>
                    <span className="badge badge-status">{exp.status}</span>
                  </div>
                )}
              </div>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
