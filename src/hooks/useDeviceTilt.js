import { useEffect } from "react";

export default function useDeviceTilt({
  onCorrect,
  onPass,
}) {
  useEffect(() => {
    function handleOrientation(event) {
  alert(
    `Beta: ${Math.round(event.beta ?? 0)}
Gamma: ${Math.round(event.gamma ?? 0)}`
  );
}

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
    };
  }, []);
}