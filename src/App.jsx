import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Profile from './pages/Profile.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './components/Contact.jsx';

import styles from './css/Container.module.css'

function App() {
  return (
    <Router>
      {/* <ParallaxLayers /> */}
        <div className={styles.container}>
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Contact />
          </main>
        </div>
    </Router>
  );
}

export default App;
