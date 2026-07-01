import React from 'react';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';

export default function Projects() {
  const projectsData = [
    {
      name: 'code-review-ai-system',
      description: 'An AI-powered code review tool. Code is sent to an LLM (OpenAI API) which returns review comments and improvement suggestions, surfaced through a clean web UI.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'OpenAI API'],
      language: 'TypeScript',
      languageClass: 'lang-ts',
      stars: 8,
      liveUrl: 'https://code-review-theta.vercel.app/',
      repoUrl: 'https://github.com/Shikher-iwaiskar',
      status: 'Live'
    }
  ];

  return (
    <section id="projects">
      <span className="eyebrow">Portfolio</span>
      <h2>
        <Star size={20} className="section-title-icon" /> Projects
      </h2>
      
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-title-wrapper">
                <GitBranch size={16} className="project-repo-icon" />
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-title"
                >
                  {project.name}
                </a>
                <span className="project-public-badge">Public</span>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech-chips">
              {project.tech.map((techItem, techIndex) => (
                <span key={techIndex} className="tech-chip">{techItem}</span>
              ))}
            </div>

            <div className="project-meta">
              <div className="project-meta-item">
                <span className={`lang-dot ${project.languageClass}`}></span>
                <span>{project.language}</span>
              </div>
              
              <div className="project-meta-item">
                <Star size={14} />
                <span>{project.stars}</span>
              </div>

              {project.status === 'Live' && (
                <div className="project-meta-item">
                  <span className="live-dot"></span>
                  <span style={{ color: 'var(--success-fg)', fontWeight: 500 }}>Live</span>
                </div>
              )}
              
              <div className="project-links" style={{ marginLeft: 'auto' }}>
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  title="View GitHub Repository"
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                  title="View Live Demo"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
