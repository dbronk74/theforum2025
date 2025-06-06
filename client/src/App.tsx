import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gauntlet from './pages/Gauntlet';
import Oracle from './pages/Oracle';
import WorldSpeak from './pages/WorldSpeak';

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 10, backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/gauntlet" style={{ marginRight: 10 }}>Gauntlet</Link>
        <Link to="/oracle" style={{ marginRight: 10 }}>Oracle</Link>
        <Link to="/worldspeak">WorldSpeak</Link>
      </nav>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gauntlet" element={<Gauntlet />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/worldspeak" element={<WorldSpeak />} />
        </Routes>
      </div>
    </Router>
  );
}
