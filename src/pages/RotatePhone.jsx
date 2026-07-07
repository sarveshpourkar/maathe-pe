import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function RotatePhone() {
  const navigate = useNavigate();
  const { categoryId, deckId } = useParams();

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer:fine)").matches;

    function checkOrientation() {
      // Desktop: continue automatically
      if (isDesktop) {
        navigate(`/game/${categoryId}/${deckId}`, {
          replace: true,
        });
        return;
      }

      // Mobile: continue only in landscape
      if (window.innerWidth > window.innerHeight) {
        navigate(`/game/${categoryId}/${deckId}`, {
          replace: true,
        });
      }
    }

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, [navigate, categoryId, deckId]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
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
    </div>
  );
}