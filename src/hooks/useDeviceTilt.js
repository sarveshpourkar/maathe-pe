import { useEffect } from "react";

export default function useDeviceTilt({
  onCorrect,
  onPass,
}) {
  useEffect(() => {
    let cooldown = false;

    function handleOrientation(event) {
      if (cooldown) return;

      const beta = event.beta ?? 0;
      const gamma = event.gamma ?? 0;

      // Correct (phone tilted downward)
      if (beta > 150 && gamma > 20) {
        cooldown = true;
        onCorrect?.();
        navigator.vibrate?.(80);

        setTimeout(() => {
          cooldown = false;
        }, 800);

        return;
      }

      // Pass (phone tilted upward)
      if (beta > -20 && beta < 20 && gamma > -55) {
        cooldown = true;
        onPass?.();
        navigator.vibrate?.(80);

        setTimeout(() => {
          cooldown = false;
        }, 800);
      }
    }

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
    };
  }, [onCorrect, onPass]);
}