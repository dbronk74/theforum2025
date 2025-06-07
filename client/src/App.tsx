import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gauntlet from './pages/Gauntlet';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-6">The Forum 2025</h1>
        <nav className="space-x-4 mb-6">
          <Link to="/gauntlet" className="underline hover:text-blue-300">Gauntlet</Link>
          <Link to="/" className="underline hover:text-blue-300">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to The Forum. Select a branch above.</div>} />
          <Route path="/gauntlet" element={<Gauntlet />} />
        </Routes>
      </div>
    </Router>
  );
}
