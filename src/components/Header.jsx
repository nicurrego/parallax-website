// src/components/Header.jsx
import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';

const LANGUAGES = [
  { code: 'es', title: 'Español', flag: '/colombia.png' },
  { code: 'ja', title: '日本語', flag: '/japan.png' },
  { code: 'en', title: 'English', flag: '/united-states.png' },
  { code: 'pt', title: 'Português', flag: '/brazil.png' },
];

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
  const location = useLocation();
  const navigate = useNavigate();

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
    const u = new URL(window.location.href);
    u.searchParams.set('lang', code);
    window.history.replaceState({}, '', u);
  };

  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[2];

  const handleInPageNav = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
    setOpenNav(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a
            href="https://nicurrego.github.io/my_mind/"
            className={styles.vaultLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Mind
          </a>
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

          <button
            className={styles.navLink}
            onClick={(e) => handleInPageNav(e, 'about')}
            aria-label="About"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            About
          </button>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Projects
          </NavLink>

          <button
            className={styles.navLink}
            onClick={(e) => handleInPageNav(e, 'contact')}
            aria-label="Contact"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Contact
          </button>

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
              <img src={current.flag} alt={current.title} className={styles.flagIcon} />
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
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      <img src={lang.flag} alt={lang.title} className={styles.flagIcon} />
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
            <button
              className={styles.mobileLink}
              onClick={(e) => {
                handleInPageNav(e, 'about');
              }}
            >
              About
            </button>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink
              }
              onClick={() => setOpenNav(false)}
            >
              Projects
            </NavLink>
            <button
              className={styles.mobileLink}
              onClick={(e) => {
                handleInPageNav(e, 'contact');
              }}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
