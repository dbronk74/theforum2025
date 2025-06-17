import React, { useEffect, useState } from 'react';
import { socket } from '../utils/socket';

const GauntletTimer = ({ status }: { status: 'waiting' | 'active' | 'ended' }) => {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    if (status !== 'active') return;

    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  return (
    <div className="my-4 text-3xl font-mono">
      {status === 'waiting' && 'Waiting to begin...'}
      {status === 'active' && `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`}
      {status === 'ended' && 'Debate Ended'}
    </div>
  );
};

export default GauntletTimer;
