import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Countdown() {
  const navigate = useNavigate();
  const { categoryId, deckId } = useParams();

  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      const timer = setTimeout(() => {
        navigate(`/rotate/${categoryId}/${deckId}`, {
          replace: true,
        });
      }, 700);

      return () => clearTimeout(timer);
    }

    const interval = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(interval);
  }, [count, navigate, categoryId, deckId]);

  return (
    <div className="flex min-h-screen items-center justify-center">

      <AnimatePresence mode="wait">

        <motion.h1
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="text-8xl font-black text-orange-400"
        >
          {count === 0 ? "GO!" : count}
        </motion.h1>

      </AnimatePresence>

    </div>
  );
}