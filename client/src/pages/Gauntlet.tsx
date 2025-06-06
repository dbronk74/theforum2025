import React from 'react';

export default function Gauntlet() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">The Gauntlet - Debate Arena</h1>
      <p className="mb-6">
        Welcome to The Gauntlet! This is where debates come alive.
      </p>

      <section className="border rounded p-4 bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Upcoming Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Participant video feeds and avatars</li>
          <li>Live debate controls and timers</li>
          <li>Audience reaction and voting tools</li>
          <li>AI fact-checking and moderation</li>
        </ul>
      </section>
    </div>
  );
}
