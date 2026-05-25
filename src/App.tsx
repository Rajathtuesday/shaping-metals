import { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import LandingDemo from "./LandingDemo";






function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'landing';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingDemo onNavigate={handleNavigate} />;

      case 'home':
        return <Home onNavigate={handleNavigate} />;

      case 'about':
        return <About onNavigate={handleNavigate} />;

      case 'projects':
        return <Projects onNavigate={handleNavigate} />;

      case 'contact':
        return <Contact onNavigate={handleNavigate} />;

      case 'gallery':
        return <Gallery onNavigate={handleNavigate} />;

      default:
        return <LandingDemo onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="pt-20">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
