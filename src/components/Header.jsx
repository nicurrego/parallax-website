import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Header.module.css';

const LANGUAGES = [
  { code: 'es', title: 'Español', flag: '/img/colombia.png' },
  { code: 'ja', title: '日本語', flag: '/img/japan.png' },
  { code: 'en', title: 'English', flag: '/img/united-states.png' },
  { code: 'pt', title: 'Português', flag: '/img/brazil.png' },
];

// simple helper to read ?lang= from URL
const getQueryLang = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'en';
  } catch {
    return 'en';
  }
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(getQueryLang());
  const langRef = useRef(null);

  // close language dropdown when clicking outside
  useEffect(() => {
    const onDoc = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const selectLang = (code) => {
    setCurrentLang(code);
    setLangOpen(false);
    // update URL param without reload
    const u = new URL(window.location.href);
    u.searchParams.set('lang', code);
    window.history.replaceState({}, '', u);
  };

  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[2];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <NavLink to="/" className={styles.vaultLink}>
            My Mind
          </NavLink>
        </div>

        <nav className={styles.navDesktop}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contact
          </NavLink>

          <div
            className={styles.langSwitcher}
            ref={langRef}
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              className={styles.langCurrent}
              aria-haspopup="true"
              aria-expanded={langOpen}
              title={current.title}
              onClick={() => setLangOpen((o) => !o)}
              type="button"
            >
              <img
                src={current.flag}
                alt={current.title}
                className={styles.flagIcon}
              />
            </button>

            {langOpen && (
              <ul className={styles.langList} role="menu">
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="none">
                    <button
                      role="menuitem"
                      onClick={() => selectLang(lang.code)}
                      className={styles.langItem}
                      title={lang.title}
                      type="button"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.title}
                        className={styles.flagIcon}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <button
          className={styles.hamburger}
          aria-label="Menu"
          onClick={() => setOpenNav((o) => !o)}
          type="button"
        >
          {openNav ? '✕' : '☰'}
        </button>

        {openNav && (
          <div className={styles.mobileMenu}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setOpenNav(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setOpenNav(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setOpenNav(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setOpenNav(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
