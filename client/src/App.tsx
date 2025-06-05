import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Gauntlet() {
  return <h2>The Gauntlet - Debate Arena</h2>;
}

function Oracle() {
  return <h2>Oracle AI Companion</h2>;
}

function WorldSpeak() {
  return <h2>WorldSpeak Arena</h2>;
}

function Home() {
  return <h2>Welcome to The Forum 2025</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/gauntlet" style={{ marginRight: '1rem' }}>Gauntlet</Link>
        <Link to="/oracle" style={{ marginRight: '1rem' }}>Oracle</Link>
        <Link to="/worldspeak">WorldSpeak</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gauntlet" element={<Gauntlet />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/worldspeak" element={<WorldSpeak />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
