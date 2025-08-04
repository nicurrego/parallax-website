import React from 'react';
import projects from '../data/projects.js';
import styles from '../css/Profile.module.css';
import '../css/ProjectsOverrides.css';

const Projects = () => {
  if (!projects || projects.length === 0) {
    return (
      <section className={styles.projectsSection}>
        <div className={styles.inner}>
          <h2>Projects</h2>
          <p>No projects available yet. Check back soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.inner}>
        <h2>Projects</h2>
        <div className={styles.previewGrid}>
          {projects.map((p) => (
            <div key={p.slug} className={styles.card}>
              {p.image && (
                <div className="project-image-wrapper">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="project-meta">
                <div className="title-row">
                  <div>
                    <h3 style={{ margin: 0 }}>{p.title}</h3>
                    {p.date && (
                      <div className="project-date">{p.date}</div>
                    )}
                  </div>
                  <div className="badges">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge live-badge"
                      >
                        Live
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge github-badge"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                <p style={{ margin: 0 }}>{p.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
