import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Ramona Ehlert</h4>
          <p>Full Stack Software Developer</p>
          <p>Canada</p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:rehlert.web@gmail.com">Email</a></li>
            <li><a href="https://github.com/ehlertr" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/ramona-e" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ramona Ehlert. Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer