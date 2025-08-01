import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="left">
        <Link to="/" className="vault-link">My Mind</Link>
      </div>

      <nav className="nav-desktop">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button
        className="hamburger"
        aria-label="Menu"
        onClick={() => setOpen(o => !o)}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
