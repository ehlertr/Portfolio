import React from 'react'
import '../styles/Hero.css'

function Hero() {
  const startDate = new Date('2021-08-01')
  const today = new Date()
  
  let years = today.getFullYear() - startDate.getFullYear()
  let months = today.getMonth() - startDate.getMonth()
  
  // Adjust if we haven't reached the anniversary month yet
  if (months < 0) {
    years--
    months += 12
  }
  
  // Format the experience string
  let experienceText = `${years} year${years !== 1 ? 's' : ''}`
  if (months >= 3) {
    experienceText += ` ${months} month${months !== 1 ? 's' : ''}`
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Ramona</h1>
        <p className="hero-subtitle">Full Stack Software Developer</p>
        <p className="hero-description">
          I build web applications that work for the people who use them. Over my 5 years of experience, 
          I've owned production systems across high-traffic e-commerce and internal platforms, 
          shipping features that improve usability, performance, and business outcomes.
        </p>
        <div className="hero-cta">
          <a href="mailto:rehlert.web@gmail.com" className="cta-primary">Get in Touch</a>
          <a href="#projects" className="cta-secondary">View My Work</a>
        </div>
        <p className="hero-location">📍 Canada</p>
      </div>
    </section>
  )
}

export default Hero