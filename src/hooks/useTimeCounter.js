import { useState, useEffect } from 'react';

function useTimeCounter(date) {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const today = new Date();
    const diff = Math.floor((date.getTime() - today.getTime()) / 1000);
    setRemainingSeconds(diff);
    const id = setInterval(() => {
      const today = new Date();
      const diff = Math.floor((date.getTime() - today.getTime()) / 1000);
      setRemainingSeconds(diff);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  let rest;
  const days = Math.floor(remainingSeconds / (60 * 60 * 24));
  rest = remainingSeconds % (60 * 60 * 24);
  const hours = Math.floor(rest / (60 * 60));
  rest = rest % (60 * 60);
  const minutes = Math.floor(rest / 60);
  rest = rest % 60;
  const seconds = rest;

  return { days, hours, minutes, seconds };
}

export default useTimeCounter;
