import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-avatar-container">
        <div className="hero-avatar">
          <div className="hero-avatar-inner">SW</div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-meta">
          <h1>Shikher Waiskar</h1>
          <span className="hero-title">Backend Engineer</span>
        </div>
        <div className="hero-badges">
          <span className="badge badge-status">Open to opportunities</span>
          <span className="badge">📍 India</span>
          <span className="badge">🎓 CS Student</span>
        </div>
        <p className="hero-tagline">
          Computer Science student with a strong interest in Java development and backend technologies. 
          Currently focused on improving Java, SQL, data structures, and software development fundamentals 
          while preparing for interviews. Enjoys learning how computers, networks, databases, and programming 
          concepts work in depth.
        </p>
      </div>
    </section>
  );
}
