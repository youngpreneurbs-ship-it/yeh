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
import { About } from './pages/About';
import { ProgramsOverview } from './pages/programs/ProgramsOverview';
import { ProgramsAges7to11 } from './pages/programs/ProgramsAges7to11';
import { ProgramsAges12to16 } from './pages/programs/ProgramsAges12to16';
import { CurriculumOverview } from './pages/curriculum/CurriculumOverview';
import { CurriculumEntrepreneurship } from './pages/curriculum/CurriculumEntrepreneurship';
import { CurriculumEconomics } from './pages/curriculum/CurriculumEconomics';
import { CurriculumMarketing } from './pages/curriculum/CurriculumMarketing';
import { CurriculumDesignThinking } from './pages/curriculum/CurriculumDesignThinking';
import { Parents } from './pages/Parents';
import { Schools } from './pages/Schools';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsOverview />} />
            <Route path="/programs/ages-7-11" element={<ProgramsAges7to11 />} />
            <Route path="/programs/ages-12-16" element={<ProgramsAges12to16 />} />
            <Route path="/curriculum" element={<CurriculumOverview />} />
            <Route path="/curriculum/entrepreneurship" element={<CurriculumEntrepreneurship />} />
            <Route path="/curriculum/economics" element={<CurriculumEconomics />} />
            <Route path="/curriculum/marketing" element={<CurriculumMarketing />} />
            <Route path="/curriculum/design-thinking" element={<CurriculumDesignThinking />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
