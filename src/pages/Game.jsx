import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import categories from "../data/categories";
import decks from "../data/decks";
import useTimer from "../hooks/useTimer";

export default function Game() {
  const { categoryId, deckId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const deck = (decks[categoryId] || []).find((d) => d.id === deckId);

  const { timeLeft } = useTimer(60);
  useEffect(() => {
  if (timeLeft === 0) {
    navigate("/results");
  }
}, [timeLeft, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col px-6 py-8"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            {category?.title}
          </p>

          <h1 className="mt-1 text-2xl font-black text-white">
            {deck?.title}
          </h1>
        </div>

        <div className="rounded-2xl bg-orange-500 px-5 py-3">
          <span className="text-2xl font-black text-white">
            {timeLeft}
          </span>
        </div>

      </div>

      {/* Word Card */}

      <div className="flex flex-1 items-center justify-center">

        <motion.div
          layout
          className="flex h-72 w-full items-center justify-center rounded-[32px] border border-white/10 bg-[#151E2E] p-8"
        >
          <h2 className="text-center text-5xl font-black text-white">
            Ready?
          </h2>
        </motion.div>

      </div>

      {/* Bottom Score */}

      <div className="mb-2 flex justify-between rounded-2xl border border-white/10 bg-[#151E2E] px-6 py-5">

        <div className="text-center">
          <p className="text-sm text-slate-400">
            Correct
          </p>

          <h2 className="mt-1 text-3xl font-black text-green-400">
            0
          </h2>
        </div>

        <div className="h-14 w-px bg-white/10" />

        <div className="text-center">
          <p className="text-sm text-slate-400">
            Passed
          </p>

          <h2 className="mt-1 text-3xl font-black text-red-400">
            0
          </h2>
        </div>

      </div>

    </motion.div>
  );
}