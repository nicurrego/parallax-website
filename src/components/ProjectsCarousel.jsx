import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects.js';
import styles from '../css/ProjectsCarousel.module.css';

const ProjectsCarousel = ({ interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const length = projects.length;

  // auto‐advance
  useEffect(() => {
    if (length < 2) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % length);
    }, interval);
    return () => clearInterval(id);
  }, [length, interval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prev(e);
      } else if (e.key === 'ArrowRight') {
        next(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [length]);

  if (length === 0) return null;

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + length) % length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % length);
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.inner}>
        <h2>Check out some of my projects</h2>
        <div className={styles.carousel} role="region" aria-label="Projects carousel">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
              onClick={() => navigate('/projects')}
              role="button"
              tabIndex={i === current ? 0 : -1}
              aria-label={`View project: ${p.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/projects');
                }
              }}
            >
              {p.image && p.image.trim() !== '' && (
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.summary}>{p.summary}</p>
            </div>
          ))}

          {length > 1 && (
            <>
              <button
                className={styles.prev}
                onClick={prev}
                aria-label="Previous project"
                type="button"
              >
                ‹
              </button>
              <button
                className={styles.next}
                onClick={next}
                aria-label="Next project"
                type="button"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;