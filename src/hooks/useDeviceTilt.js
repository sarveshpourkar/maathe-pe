import { useEffect, useRef } from "react";

export default function useDeviceTilt({ onTilt }) {
  const state = useRef("READY");
  const normalTimer = useRef(null);

  useEffect(() => {
    function handleOrientation(event) {
      const beta = event.beta ?? 0;
      const gamma = event.gamma ?? 0;

      switch (state.current) {
        // ---------------- READY ----------------

        case "READY": {
          // Correct
          if (beta > 150 && gamma > 20) {
            state.current = "WAIT_NORMAL";
            navigator.vibrate?.(80);
            onTilt?.("correct");
            return;
          }

          // Pass
          if (
            beta > -20 &&
            beta < 20 &&
            gamma > -50 &&
            gamma < -20
          ) {
            state.current = "WAIT_NORMAL";
            navigator.vibrate?.(80);
            onTilt?.("pass");
            return;
          }

          break;
        }

        // ---------------- WAIT NORMAL ----------------

        case "WAIT_NORMAL": {
          // Back to forehead position
          if (gamma < -65) {
            if (!normalTimer.current) {
              normalTimer.current = setTimeout(() => {
                state.current = "READY";
                normalTimer.current = null;
              }, 400);
            }
          } else {
            // Still moving -> cancel timer
            if (normalTimer.current) {
              clearTimeout(normalTimer.current);
              normalTimer.current = null;
            }
          }

          break;
        }

        default:
          break;
      }
    }

    window.addEventListener(
      "deviceorientation",
      handleOrientation
    );

    return () => {
      if (normalTimer.current) {
        clearTimeout(normalTimer.current);
      }

      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
    };
  }, [onTilt]);
}