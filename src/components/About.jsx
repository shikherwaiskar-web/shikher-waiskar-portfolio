import React from 'react';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <span className="eyebrow">Overview</span>
      <h2>About Me</h2>
      <div className="card-container">
        <div className="card-header">
          <Terminal size={16} className="card-header-title-icon" />
          <span className="card-header-title">README.md</span>
        </div>
        <div className="card-body">
          <div className="readme-content">
            <p>
              I'm a backend-leaning developer building toward a strong foundation in Java and software 
              engineering fundamentals. My current focus is on writing clean, correct backend code, 
              understanding data structures deeply, and applying that knowledge to real projects — including 
              a working AI-powered code review tool.
            </p>
            <p>
              I'm preparing for technical interviews and actively growing my skills in databases, 
              networking, and backend frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
