import { useEffect } from "react";

export default function useDeviceTilt({ onTilt }) {
  useEffect(() => {
    function handleOrientation(event) {
      onTilt?.({
        beta: Math.round(event.beta ?? 0),
        gamma: Math.round(event.gamma ?? 0),
      });
    }

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
    };
  }, [onTilt]);
}