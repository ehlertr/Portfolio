import React from 'react'
import '../styles/Skills.css'

function Skills() {
  // Calculate exact time at The Brick
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

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Sass', 'Shopify Liquid', 'Responsive Design', 'Accessibility']
    },
    {
      category: 'Backend & DevOps',
      skills: ['Node.js', 'Laravel (PHP)', 'Python', 'REST APIs', 'Firebase', 'Google Cloud Platform', 'CI/CD Pipelines', 'SSH Deploys', 'Database Design']
    },
    {
      category: 'Data & Tools',
      skills: ['SQL', 'MySQL', 'MariaDB', 'Firestore', 'Git / Bitbucket', 'GitHub', 'Jira', 'Confluence', 'NPM', 'Figma', 'GA4']
    },
    {
      category: 'Practices',
      skills: ['Agile / Scrum', 'Code Review', 'Mentoring', 'System Design', 'Performance Optimization', 'UX-Focused Development', 'Accessibility Standards']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, sidx) => (
                  <span key={sidx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-highlights">
          <h3>Experience Highlights</h3>
          <ul>
            <li><strong>E-commerce Scale:</strong> Shipped features across Shopify storefronts with millions of annual visitors</li>
            <li><strong>System Ownership:</strong> Sole DevOps owner of company intranet serving 1000+ daily users</li>
            <li><strong>Full Stack Delivery:</strong> Own features end-to-end from design through deployment</li>
            <li><strong>Leadership:</strong> Mentor teammates, establish coding standards, conduct code reviews</li>
            <li><strong>Analytics-Driven:</strong> Track and optimize for business metrics and user experience improvements</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills