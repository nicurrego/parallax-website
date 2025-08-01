import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectsList from './components/ProjectsList.jsx';
import ProjectArticle from './components/ProjectArticle.jsx';
import Contact from './components/Contact.jsx';
import ParallaxLayers from './components/ParallaxLayers.jsx';


function App() {
  return (
    <Router>
      <ParallaxLayers />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:slug" element={<ProjectArticle />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback to home */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
