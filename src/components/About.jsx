import styles from '../css/Profile.module.css';

const About = () => (
  <section id="about" className={styles.aboutSection}>
    <div className={styles.inner}>
      <h2>About Me</h2>
      <div className={styles.box}>
        <p>
          Rooted in Colombia and driven by curiosity, I dedicate each day to
          understanding life and transforming my insights into practical tools
          that enhance our world. Based in Tokyo since 2023.
        </p>
        <p>
          I earned a degree in Information Processing from HAL Tokyo (2024-2026)
          and am now committed to exploring emerging technologies that empower
          humanity and accelerate progress. My primary passion lies in AI
          training—most of my highlighted projects explore this field, though I
          have also led creative and financial initiatives.
        </p>
        <p>
          In my leisure time, I explore the world of anime and challenge myself
          with rapid chess matches on chess.com—activities that sharpen my
          strategic thinking and inspire creativity.
        </p>
        <p>Below is a selection of projects I'm most proud of:</p>
        <ul className={styles.list}>
          <li>
            For feedback or to show support, feel free to leave a comment or star
            the repository on{' '}
            <a
              href="https://github.com/nicurrego"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              GitHub
            </a>
            .
          </li>
          <li>
            To see more personal reflections, visit my blog{' '}
            <a
              href="https://nicurrego.github.io/my_mind/"
              className={styles.inlineLink}
            >
              “My Mind”
            </a>
            , where I share elegant, humorous and deeply philosophical snapshots
            of daily life.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
