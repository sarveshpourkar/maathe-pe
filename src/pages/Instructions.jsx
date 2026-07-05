import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Smartphone,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import categories from "../data/categories";
import decks from "../data/decks";

export default function Instructions() {
  const navigate = useNavigate();
  const { categoryId, deckId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const deck = (decks[categoryId] || []).find((d) => d.id === deckId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col px-6 py-8"
    >
      {/* Back */}

      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-slate-400 transition hover:text-white"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* Hero */}

      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-orange-500/5"
        >
          <Smartphone
            size={56}
            className="text-orange-400"
          />
        </motion.div>

        <h1 className="mt-6 text-4xl font-black">
          Get Ready
        </h1>

        <p className="mt-2 text-slate-400">
          {category?.title} • {deck?.title}
        </p>

        <p className="mt-6 text-base leading-7 text-slate-300">
          Place your phone on your forehead.
          <br />
          Your friends will give you clues.
          <br />
          Guess as many as you can before time runs out.
        </p>
      </div>

      {/* Instructions */}

      <div className="mt-14 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
            <ArrowDown
              size={34}
              className="text-green-400"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-white">
            Tilt Down
          </h2>

          <p className="mt-1 text-slate-400">
            Correct Answer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">
            <ArrowUp
              size={34}
              className="text-red-400"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-white">
            Tilt Up
          </h2>

          <p className="mt-1 text-slate-400">
            Pass
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/15">
            <span className="text-2xl">⏱</span>
          </div>

          <h2 className="mt-4 text-xl font-bold text-white">
            60 Seconds
          </h2>

          <p className="mt-1 text-slate-400">
            Guess as many as possible
          </p>
        </motion.div>
      </div>

      {/* Start Button */}

      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        onClick={() =>
          navigate(`/countdown/${categoryId}/${deckId}`)
        }
        className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 py-5 text-lg font-bold text-white shadow-[0_8px_30px_rgba(249,115,22,0.35)] transition"
      >
        Start Game
      </motion.button>
    </motion.div>
  );
}