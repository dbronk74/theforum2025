import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Gauntlet from "./pages/Gauntlet";
import Oracle from "./pages/Oracle";
import WorldSpeak from "./pages/WorldSpeak";

export default function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "#ddd", padding: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/gauntlet" style={{ marginRight: "10px" }}>Gauntlet</Link>
        <Link to="/oracle" style={{ marginRight: "10px" }}>Oracle</Link>
        <Link to="/worldspeak">WorldSpeak</Link>
      </nav>
      <div style={{ padding: "10px" }}>
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
