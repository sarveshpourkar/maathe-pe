import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { setCalibration } from "../utils/calibration";

export default function RotatePhone() {
  const navigate = useNavigate();
  const { categoryId, deckId } = useParams();

  const [isCalibrating, setIsCalibrating] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer:fine)").matches;

    let samples = [];
    let countdownInterval;
    let calibrationTimeout;

    function startCalibration() {
      if (isCalibrating) return;

      setIsCalibrating(true);

      function handleOrientation(event) {
        samples.push({
          beta: event.beta ?? 0,
          gamma: event.gamma ?? 0,
        });
      }

      window.addEventListener(
        "deviceorientation",
        handleOrientation
      );

      countdownInterval = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);

      calibrationTimeout = setTimeout(() => {
        clearInterval(countdownInterval);

        window.removeEventListener(
          "deviceorientation",
          handleOrientation
        );

        if (samples.length > 0) {
          const avgBeta =
            samples.reduce((s, v) => s + v.beta, 0) /
            samples.length;

          const avgGamma =
            samples.reduce((s, v) => s + v.gamma, 0) /
            samples.length;

          setCalibration(avgBeta, avgGamma);
        }

        navigate(`/game/${categoryId}/${deckId}`, {
          replace: true,
        });
      }, 3000);
    }

    function checkOrientation() {
      if (isDesktop) {
        navigate(`/game/${categoryId}/${deckId}`, {
          replace: true,
        });
        return;
      }

      if (window.innerWidth > window.innerHeight) {
        startCalibration();
      }
    }

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(calibrationTimeout);

      window.removeEventListener(
        "resize",
        checkOrientation
      );

      window.removeEventListener(
        "orientationchange",
        checkOrientation
      );
    };
  }, [navigate, categoryId, deckId, isCalibrating]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center">

      {!isCalibrating ? (
        <>
          <motion.div
            animate={{ rotate: [0, 90, 90, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <RotateCw
              size={90}
              className="text-orange-400"
            />
          </motion.div>

          <h1 className="mt-10 text-4xl font-black text-white">
            Rotate Your Phone
          </h1>

          <p className="mt-5 max-w-xs leading-7 text-slate-400">
            Rotate your phone to landscape.
            <br />
            The game will start automatically.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-black text-white">
            Hold Still
          </h1>

          <p className="mt-4 text-slate-400">
            Calibrating...
          </p>

          <div className="mt-10 text-7xl font-black text-orange-500">
            {countdown}
          </div>
        </>
      )}

    </div>
  );
}