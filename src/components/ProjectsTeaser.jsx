import { Link } from 'react-router-dom';
import projectsData from '../data/projects.js';
import styles from '../css/Profile.module.css';

const ProjectsTeaser = () => (
  <section id="projects" className={styles.projectsSection}>
    <div className={styles.inner}>
      <h2>Projects</h2>
      <div className={styles.previewGrid}>
        {projectsData.slice(0, 3).map((p) => (
          <div key={p.slug} className={styles.card}>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <Link to={`/projects/${p.slug}`} className={styles.readMore}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.moreLink}>
        <Link to="/projects">See all projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectsTeaser;
