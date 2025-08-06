import styles from '../css/FooterSocial.module.css';

const FooterSocial = () => (
  <footer className={styles.footer} id="site-contact">
    <div className={styles.inner}>
      <div className={styles.links}>
        <a
          href="https://github.com/nicurrego"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="/github.png" alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/nicurrego"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/in.png" alt="LinkedIn" />
        </a>
        <a
          href="https://instagram.com/nicurrego"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href="mailto:contact@nicurrego@gmail.com" aria-label="Email">
          <img src="/email.png" alt="Email" />
        </a>
      </div>
      <div className={styles.credit}>
        <p>&copy; 2025 Nicolas Urrego. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterSocial;
