import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main className="app-container">
        <Hero />
        <About />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Experience />
        <div className="section-divider"></div>
        <Contact />
        
        <footer className="footer">
          <p className="footer-text">
            © {currentYear} Shikher Waiskar. Built with React &amp; CSS.
          </p>
        </footer>
      </main>
    </>
  );
}
