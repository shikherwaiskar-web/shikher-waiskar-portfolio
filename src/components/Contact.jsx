import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'shikher.waiskar@outlook.com',
      url: 'mailto:shikher.waiskar@outlook.com',
      icon: <Mail size={18} />
    },
    {
      label: 'GitHub',
      value: 'github.com/Shikher-iwaiskar',
      url: 'https://github.com/Shikher-iwaiskar',
      icon: <Github size={18} />,
      isExternal: true
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shikher-waiskar-71460b3a1',
      url: 'https://www.linkedin.com/in/shikher-waiskar-71460b3a1/',
      icon: <Linkedin size={18} />,
      isExternal: true
    }
  ];

  return (
    <section id="contact">
      <span className="eyebrow">Get in touch</span>
      <h2>
        <Mail size={20} className="section-title-icon" /> Contact
      </h2>

      <div className="contact-grid">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.isExternal ? '_blank' : '_self'}
            rel={link.isExternal ? 'noopener noreferrer' : ''}
            className="contact-card"
          >
            <div className="contact-icon-box">{link.icon}</div>
            <div className="contact-info">
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
