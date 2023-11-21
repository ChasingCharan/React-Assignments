
import React from 'react';
import useTimer from './useTimer';

const Timer = () => {
  const elapsedTime = useTimer();

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
  };

  return (
    <div>
      <h2>Elapsed Time</h2>
      <p>{formatTime(elapsedTime)}</p>
    </div>
  );
};

export default Timer;
