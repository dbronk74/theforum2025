import React from 'react';

const GauntletParticipants = () => {
  return (
    <div className="flex items-center justify-center space-x-12 mb-6">
      <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-xl">👤 Debater A</div>
      <span className="text-2xl">VS</span>
      <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-xl">👤 Debater B</div>
    </div>
  );
};

export default GauntletParticipants;
