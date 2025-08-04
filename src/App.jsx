import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ParallaxLayers from './components/ParallaxLayers.jsx';
import FooterSocial from './components/FooterSocial.jsx';

import Header from './components/Header.jsx';
import Profile from './pages/Profile.jsx';
import Projects from './pages/Projects.jsx';

import styles from './css/Container.module.css'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <ParallaxLayers />
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <FooterSocial />
      </div>
    </Router>
  );
}


export default App;
