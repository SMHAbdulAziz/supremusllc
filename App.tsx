
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import MLKPromo from './pages/MLKPromo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Ornamentation */}
      <svg className="abstract-curves" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,500 C100,200 400,100 500,500 S900,800 1000,500" stroke="#D4AF37" fill="transparent" strokeWidth="0.5" />
        <path d="M0,550 C150,250 450,150 550,550 S950,850 1000,550" stroke="#D4AF37" fill="transparent" strokeWidth="0.3" />
        <path d="M0,600 C200,300 500,200 600,600 S1000,900 1000,600" stroke="#D4AF37" fill="transparent" strokeWidth="0.1" />
      </svg>

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mlk-sale" element={<MLKPromo />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
