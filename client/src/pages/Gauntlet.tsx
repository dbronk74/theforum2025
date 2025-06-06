import React, { useState, useEffect } from "react";

export default function Gauntlet() {
  // Participants with speaking state
  const [participants] = useState([
    { id: 1, name: "Alice", speaking: true },
    { id: 2, name: "Bob", speaking: false },
    { id: 3, name: "Charlie", speaking: false },
  ]);

  // Timer logic
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes default
  const [timerRunning, setTimerRunning] = useState(false);

  // Voting state
  const [vote, setVote] = useState<null | number>(null); // participant id or null

  // Timer countdown effect
  useEffect(() => {
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

  // Format time mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">The Gauntlet - Debate Arena</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Participants</h2>
        <div className="flex space-x-6">
          {participants.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col items-center p-4 border rounded-lg shadow-md w-32 ${
                p.speaking
                  ? "border-blue-600 bg-blue-100"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="font-bold text-lg">{p.name}</div>
              <div
                className={`mt-1 text-sm ${
                  p.speaking ? "text-blue-700" : "text-gray-500"
                }`}
              >
                {p.speaking ? "Speaking" : "Listening"}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Debate Timer</h2>
        <div className="flex items-center space-x-6">
          <button
            className={`px-5 py-2 rounded-lg text-white ${
              timerRunning ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
            } transition`}
            onClick={() => setTimerRunning((r) => !r)}
          >
            {timerRunning ? "Pause Timer" : "Start Timer"}
          </button>
          <div className="text-3xl font-mono w-24 text-center">{formatTime(timeLeft)}</div>
          <button
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
            onClick={() => {
              setTimeLeft(300);
              setTimerRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Audience Voting</h2>
        <div className="flex space-x-4">
          {participants.map((p) => (
            <button
              key={p.id}
              onClick={() => setVote(p.id)}
              className={`px-5 py-2 rounded-lg text-white transition ${
                vote === p.id ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Vote for {p.name}
            </button>
          ))}
          <button
            onClick={() => setVote(null)}
            className={`px-5 py-2 rounded-lg text-white transition ${
              vote === null ? "bg-gray-700" : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            Abstain
          </button>
        </div>
        {vote !== null && (
          <p className="mt-4 text-lg text-blue-700 font-semibold">
            You voted for {participants.find((p) => p.id === vote)?.name}
          </p>
        )}
        {vote === null && (
          <p className="mt-4 text-lg text-gray-600 font-semibold">You abstained</p>
        )}
      </section>
    </div>
  );
}
