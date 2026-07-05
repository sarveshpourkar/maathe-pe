import { useEffect, useState } from "react";

export default function useTimer(initialTime = 60) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isRunning]);

  const reset = () => {
    setTimeLeft(initialTime);
    setIsRunning(true);
  };

  return {
    timeLeft,
    isRunning,
    reset,
  };
}