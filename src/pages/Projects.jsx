// src/pages/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects.js'; // array of { slug, title, summary, date, ... }
import styles from '../css/Profile.module.css'; // reuse the teaser/list styles

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
              <h3>{p.title}</h3>
              {p.date && <p style={{ fontSize: '0.8rem', margin: '4px 0' }}>{p.date}</p>}
              <p>{p.summary}</p>
              <Link to={`/projects/${p.slug}`} className={styles.readMore}>
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
