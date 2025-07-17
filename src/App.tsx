import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import About from './components/About';
import Home from './components/Home';
import Partners from './components/Partners';
import Team from './components/Team';
import Actualites from './components/Actualites';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <FooterSection />
    </div>
  );
}

export default App;