import styles from '../css/Profile.module.css'; // reuses the same styles

const Hero = () => (
  <section id="hero" className={styles.heroSection}>
    <div className={styles.heroText}>
      <p className={styles.role}>ML ENGINEER / WRITER</p>
      <h1 className={styles.title}>
        Hello, I'm <br />
        Nicolas Urrego
      </h1>
      <p className={styles.tagline}>
        Passionate adventurer who loves working with the most exciting technology.
        <br />
        I live day to day and capture the most impactful moments in{' '}
        <a href="https://nicurrego.github.io/my_mind/" className={styles.inlineLink}>
          My Mind
        </a>
        . <br />
        I recommend you take a look, you're sure to be surprised!
      </p>
    </div>

    <div className={styles.heroImage}>
      <img
        src="../../my_photo_mobile.png"
        alt="Portrait of Nicolas Urrego"
        loading="lazy"
        width={300}
        height={300}
      />
    </div>
  </section>
);

export default Hero;
