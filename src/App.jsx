import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';
// import About from './components/About.jsx';
// import ProjectsList from './components/ProjectsList.jsx';
// import ProjectArticle from './components/ProjectArticle.jsx';
import Contact from './components/Contact.jsx';
// import ParallaxLayers from './components/ParallaxLayers.jsx';

import styles from './css/Container.module.css'

function App() {
  return (
    <Router>
      {/* <ParallaxLayers /> */}
        <div className={styles.container}>
          <main>
            <Header />
              {/* <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/projects/:slug" element={<ProjectArticle />} />
                <Route path="*" element={<Hero />} />
              </Routes> */}
            <Contact />
          </main>
        </div>
    </Router>
  );
}

export default App;
