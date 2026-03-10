import React from 'react'
import '../styles/Navigation.css'

function Navigation({ isRecruiterView }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="/" className="nav-logo">RE</a>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="mailto:rehlert.web@gmail.com" className="contact-btn">Contact</a></li>
          {isRecruiterView && <li className="recruiter-badge">🔒 Recruiter View</li>}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation