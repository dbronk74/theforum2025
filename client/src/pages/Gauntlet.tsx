import React, { useState, useEffect } from 'react';
import { socket } from '../utils/socket';
import GauntletTimer from '../components/GauntletTimer';
import GauntletParticipants from '../components/GauntletParticipants';
import AudienceVoting from '../components/AudienceVoting';

const GauntletPage = () => {
  const [status, setStatus] = useState<'waiting' | 'active' | 'ended'>('waiting');

  useEffect(() => {
    socket.emit('joinGauntletRoom');

    socket.on('gauntletStatus', (newStatus: string) => {
      if (['waiting', 'active', 'ended'].includes(newStatus)) {
        setStatus(newStatus as typeof status);
      }
    });

    return () => {
      socket.off('gauntletStatus');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">The Gauntlet</h1>
      <GauntletParticipants />
      <GauntletTimer status={status} />
      {status === 'active' && <AudienceVoting />}
    </div>
  );
};

export default GauntletPage;
