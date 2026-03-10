import React from 'react';
import '../styles/Projects.css';
import { useRecruiterAuth } from './useRecruiterAuth';
import { RecruiterGate } from './RecruiterGate';

function Projects() {
  const {
    isAuthenticated,
    publicProjects,
    privateProjects,
    status,
    errorMsg,
    login,
    logout,
  } = useRecruiterAuth();

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {publicProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4>Built With</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.links?.explore && (
                  <a href={project.links.explore} target="_blank" rel="noopener noreferrer">
                    Explore and Learn!
                  </a>
                )}
                {project.links?.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                )}
                {project.links?.frontend && (
                  <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                    Frontend
                  </a>
                )}
                {project.links?.backend && (
                  <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                    Backend
                  </a>
                )}
              </div>

              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <p className="project-notes">{project.notes}</p>
            </div>
          ))}
        </div>
        {/* ── Private / Recruiter section ───────────────── */}
        <div className="recruiter-section">
          {!isAuthenticated ? (
            <RecruiterGate
              onUnlock={login}
              status={status}
              errorMsg={errorMsg}
            />
          ) : (
            <>
              <div className="recruiter-header">
                <h3>🔓 Recruiter Access: The Brick Projects</h3>
                <p>
                  The following projects represent my work over the past 4.5+ years.
                  Most cannot be shared publicly due to proprietary concerns, but I'm
                  excited to discuss them in detail.
                </p>
                <button className="logout-button" onClick={logout}>
                  Lock projects
                </button>
              </div>

              <div className="projects-grid">
                {privateProjects.map(project => (
                  <div key={project.id} className="project-card recruiter-card">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-type">{project.type}</span>
                    </div>
                    <p className="project-description">{project.description}</p>

                    <div className="project-highlights">
                      <h4>Highlights</h4>
                      <ul>
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech">
                      {project.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    <p className="project-impact">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
