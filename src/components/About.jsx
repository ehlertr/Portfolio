import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <h3>Why I Code</h3>
            <p>
            Coding became my way to create, explore, and shape ideas into systems that make a real difference. It is more than a skill to me, it is my art, a practice that fits naturally with the way I think and constantly pushes me to grow.
            </p>
            <p>
            What excites me most is improving experiences for the people using the systems I build, balancing technical excellence with accessibility, clarity, and performance. I am motivated by opportunities to tackle complex challenges, learn new frameworks, and contribute to products that scale.
            </p>
            <p>
            Collaboration and shared ownership are central to how I work. Mentoring teammates, reviewing code, and working closely with designers and engineers help me build elegant, reliable, and human-centered systems.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="card">
              <h4>When I'm Not Coding</h4>
              <ul>
                <li>🍄 Foraging for edible plants and mushrooms</li>
                <li>🌿 Perennial gardening and tending my yard</li>
                <li>🦴 Learning about paleontology and natural history</li>
                <li>🎵 Listening to music and going to concerts</li>
                <li>🎲 Playing board games with friends</li>
                <li>🐾 Hanging with my four-legged family members</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About