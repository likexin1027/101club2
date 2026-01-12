
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Incentives from './pages/Incentives';
import Community from './pages/Community';
import Join from './pages/Join';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/incentives" element={<Incentives />} />
            <Route path="/community" element={<Community />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
