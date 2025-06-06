import React from 'react';
import { socket } from '../utils/socket';

const AudienceVoting = () => {
  const vote = (choice: 'A' | 'B') => {
    socket.emit('audienceVote', { choice });
  };

  return (
    <div className="flex space-x-4 mt-6">
      <button
        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white text-lg"
        onClick={() => vote('A')}
      >
        Vote A
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white text-lg"
        onClick={() => vote('B')}
      >
        Vote B
      </button>
    </div>
  );
};

export default AudienceVoting;
