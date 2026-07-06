import { useEffect } from "react";

export default function useDeviceTilt({
  onCorrect,
  onPass,
}) {
  useEffect(() => {
    let cooldown = false;

    function handleOrientation(event) {
      if (cooldown) return;

      const beta = event.beta;

      if (beta == null) return;

      // Phone tilted downward
      if (beta > 45) {
        cooldown = true;
        onCorrect?.();

        setTimeout(() => {
          cooldown = false;
        }, 1000);
      }

      // Phone tilted upward
      if (beta < -45) {
        cooldown = true;
        onPass?.();

        setTimeout(() => {
          cooldown = false;
        }, 1000);
      }
    }

    window.addEventListener(
      "deviceorientation",
      handleOrientation
    );

    return () =>
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
  }, [onCorrect, onPass]);
}