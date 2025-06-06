import React, { useState } from 'react';

export default function Gauntlet() {
  // Sample participants data
  const [participants] = useState([
    { id: 1, name: 'Alice', speaking: true },
    { id: 2, name: 'Bob', speaking: false },
    { id: 3, name: 'Charlie', speaking: false },
  ]);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(false);

  // Start/pause timer handler
  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  // Format time in mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // For demo: countdown effect while running (basic)
  React.useEffect(() => {
    if (!timerRunning) return;
    if (timeLeft <= 0) {
      setTimerRunning(false);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">The Gauntlet - Debate Arena</h1>
      <p className="mb-6">Welcome to The Gauntlet! This is where debates come alive.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Participants</h2>
        <div className="flex space-x-4">
          {participants.map((p) => (
            <div
              key={p.id}
              className={`p-4 rounded border ${
                p.speaking ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-gray-100'
              }`}
            >
              <div className="font-bold">{p.name}</div>
              <div className="text-sm text-gray-600">{p.speaking ? 'Speaking' : 'Listening'}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Debate Controls</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTimer}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {timerRunning ? 'Pause Timer' : 'Start Timer'}
          </button>
          <div className="text-lg font-mono">{formatTime(timeLeft)}</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Audience Voting</h2>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition">
            Vote For Alice
          </button>
          <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
            Vote For Bob
          </button>
          <button className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">
            Abstain
          </button>
        </div>
      </section>
    </div>
  );
}
