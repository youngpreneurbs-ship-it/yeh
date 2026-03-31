import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Curriculum } from './pages/Curriculum';
import { Contact } from './pages/Contact';
import { EOI } from './pages/eoi';
import { Franchise } from './pages/Franchise';
import { Register } from './pages/register';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/eoi" element={<EOI />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
