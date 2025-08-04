import projects from '../data/projects.js';
import profileStyles from '../css/Profile.module.css';
import projectStyles from '../css/Projects.module.css';

const Projects = () => {
  if (!projects || projects.length === 0) {
    return (
      <section className={profileStyles.projectsSection}>
        <div className={profileStyles.inner}>
          <h2>Projects</h2>
          <p>No projects available yet. Check back soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={profileStyles.projectsSection}>
      <div className={profileStyles.inner}>
        <h2>Projects</h2>
        <div className={projectStyles.projectGrid}>
          {projects.map((p) => (
            <div
              key={p.slug}
              className={`${profileStyles.card} ${projectStyles.projectCard}`}
            >
              {p.image && (
                <div className={projectStyles.projectImageWrapper}>
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className={projectStyles.projectImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className={projectStyles.titleRow} style={{ marginTop: p.image ? '1rem' : 0 }}>
                <div>
                  <h3 style={{ margin: 0 }}>{p.title}</h3>
                  {p.date && (
                    <div className={projectStyles.projectDate}>{p.date}</div>
                  )}
                </div>
                <div className={projectStyles.badges}>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${projectStyles.badge} ${projectStyles.liveBadge}`}
                    >
                      Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${projectStyles.badge} ${projectStyles.githubBadge}`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              <p style={{ margin: 0 }}>{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
