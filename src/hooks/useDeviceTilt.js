import { useEffect } from "react";

export default function useDeviceTilt({
  onCorrect,
  onPass,
}) {
  useEffect(() => {
    let ready = true;
    let locked = false;

    function trigger(callback) {
      ready = false;
      locked = true;

      navigator.vibrate?.(80);
      callback?.();

      // Ignore ALL sensor events for 1.5 seconds
      setTimeout(() => {
        locked = false;
      }, 1500);
    }

    function handleOrientation(event) {
      if (locked) return;

      const beta = event.beta ?? 0;
      const gamma = event.gamma ?? 0;

      // Rearm only after returning to normal
      if (gamma < -65) {
        ready = true;
        return;
      }

      if (!ready) return;

      // Correct (tilt down)
      if (beta > 150 && gamma > 20) {
        trigger(onCorrect);
        return;
      }

      // Pass (tilt up)
      if (beta > -20 && beta < 20 && gamma > -50 && gamma < -20) {
        trigger(onPass);
      }
    }

    window.addEventListener(
      "deviceorientation",
      handleOrientation
    );

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
    };
  }, [onCorrect, onPass]);
}