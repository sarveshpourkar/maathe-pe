import { useEffect } from "react";

export default function useDeviceTilt({
  onCorrect,
  onPass,
}) {
  useEffect(() => {
    let ready = true;

    function handleOrientation(event) {
      const beta = event.beta ?? 0;
      const gamma = event.gamma ?? 0;

      // Phone has returned to the normal playing position
      if (gamma < -65) {
        ready = true;
        return;
      }

      // Don't trigger again until the phone returns to normal
      if (!ready) return;

      // Correct (tilt downward)
      if (beta > 150 && gamma > 20) {
        ready = false;
        navigator.vibrate?.(80);
        onCorrect?.();
        return;
      }

      // Pass (tilt upward)
      if (beta > -20 && beta < 20 && gamma > -50 && gamma < -20) {
        ready = false;
        navigator.vibrate?.(80);
        onPass?.();
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