// import ParallaxLayers from '../components/ParallaxLayers.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        // small delay to ensure DOM is painted
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // clear history state to avoid repeat
          window.history.replaceState({}, '', window.location.pathname);
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Profile;
