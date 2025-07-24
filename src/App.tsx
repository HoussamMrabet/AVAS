import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth, User } from './hooks/useAuth';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import About from './components/About';
import Home from './components/Home';
import Partners from './components/Partners';
import Team from './components/Team';
import Actualites from './components/Actualites';
import Contact from './components/Contact';
import PoleJeunesse from './components/PoleJeunesse';
import ElleLeVaulxBien from './components/ElleLeVaulxBien';
import PoleMediation from './components/PoleMediation';
import PoleCitoyennete from './components/PoleCitoyennete';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Orders from './components/Orders';
import Dashboard from './components/Dashboard';
import MyTestimonials from './components/MyTestimonials';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);
  const { getCurrentUser, saveUser, signOut } = useAuth();

  // Check localStorage for authenticated user on app load
  React.useEffect(() => {
    const savedUser = getCurrentUser();
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignIn = (userData: User) => {
    saveUser(userData);
    setUser(userData);
    setIsAuthenticated(true);
    // Navigate to home page
    window.location.href = '/';
  };

  const handleSignOut = () => {
    signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        isAuthenticated={isAuthenticated}
        user={user}
        onSignOut={handleSignOut}
      />
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/poles/pole-jeunesse" element={<PoleJeunesse />} />
          <Route path="/poles/elle-le-vaulx-bien" element={<ElleLeVaulxBien />} />
          <Route path="/poles/mediation-urbaine" element={<PoleMediation />} />
          <Route path="/poles/citoyennete" element={<PoleCitoyennete />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-testimonials" element={<MyTestimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {window.location.pathname !== '/signin' && <FooterSection />}
    </div>
  );
}

export default App;