
import { useState, useEffect } from 'react';

const useTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  return elapsedTime;
};

export default useTimer;
