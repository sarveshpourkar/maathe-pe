import { motion } from "framer-motion";
import { Check, Timer, X } from "lucide-react";
import { useParams } from "react-router-dom";

import categories from "../data/categories";
import decks from "../data/decks";
import useTimer from "../hooks/useTimer";

export default function Game() {
  const { categoryId, deckId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const deck = (decks[categoryId] || []).find((d) => d.id === deckId);

  const { timeLeft } = useTimer(60);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-screen flex-col bg-[#08111F] px-6 py-5"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
            {category?.title}
          </p>

          <h1 className="mt-1 text-xl font-bold text-white">
            {deck?.title}
          </h1>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-orange-500 px-4 py-3">
          <Timer size={20} className="text-white" />

          <span className="text-2xl font-black text-white">
            {timeLeft}
          </span>
        </div>

      </div>

      {/* Word */}

      <div className="flex flex-1 items-center justify-center">

        <motion.div
          layout
          className="flex h-72 w-full items-center justify-center rounded-[34px] border border-white/10 bg-[#111B2D]"
        >
          <h2 className="px-6 text-center text-5xl font-black leading-tight text-white">
            PLACE PHONE
            <br />
            ON FOREHEAD
          </h2>
        </motion.div>

      </div>

      {/* Footer */}

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-3xl bg-green-500/10 p-5 text-center">

          <Check
            className="mx-auto mb-2 text-green-400"
            size={28}
          />

          <p className="text-sm text-white/60">
            Correct
          </p>

          <h2 className="mt-1 text-3xl font-black text-green-400">
            0
          </h2>

        </div>

        <div className="rounded-3xl bg-red-500/10 p-5 text-center">

          <X
            className="mx-auto mb-2 text-red-400"
            size={28}
          />

          <p className="text-sm text-white/60">
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