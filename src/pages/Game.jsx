import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import categories from "../data/categories";
import decks from "../data/decks";
import { getWords } from "../data/words";
import useTimer from "../hooks/useTimer";
import shuffle from "../utils/shuffle";
import useDeviceTilt from "../hooks/useDeviceTilt";

export default function Game() {
  const { categoryId, deckId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const deck = (decks[categoryId] || []).find((d) => d.id === deckId);

  const { timeLeft } = useTimer(60);

  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [correct, setCorrect] = useState(0);
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    const movieWords = getWords(categoryId, deckId);
    setWords(shuffle(movieWords));
  }, [categoryId, deckId]);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/results", {
        state: {
          correct,
          passed,
        },
      });
    }
  }, [timeLeft, correct, passed, navigate]);

  const currentWord =
    words[currentIndex]?.word || "Loading...";

  function nextCorrect() {
  setCorrect((c) => c + 1);

  setCurrentIndex((i) => {
    if (i + 1 >= words.length) {
      setWords(shuffle([...words]));
      return 0;
    }
    return i + 1;
  });
}

  function nextPass() {
  setPassed((p) => p + 1);

  setCurrentIndex((i) => {
    if (i + 1 >= words.length) {
      setWords(shuffle([...words]));
      return 0;
    }
    return i + 1;
  });
}

useDeviceTilt({
  onCorrect: nextCorrect,
  onPass: nextPass,
});

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
          key={currentWord}
          layout
          className="flex h-72 w-full items-center justify-center rounded-[32px] border border-white/10 bg-[#151E2E] p-8"
        >
          <h2 className="text-center text-5xl font-black text-white">
            {currentWord}
          </h2>
        </motion.div>
      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={nextCorrect}
          className="rounded-2xl bg-green-500 py-5 text-xl font-bold text-white active:scale-95"
        >
          Correct
        </button>

        <button
          onClick={nextPass}
          className="rounded-2xl bg-red-500 py-5 text-xl font-bold text-white active:scale-95"
        >
          Pass
        </button>
      </div>

      {/* Bottom Score */}

      <div className="mb-2 flex justify-between rounded-2xl border border-white/10 bg-[#151E2E] px-6 py-5">
        <div className="text-center">
          <p className="text-sm text-slate-400">
            Correct
          </p>

          <h2 className="mt-1 text-3xl font-black text-green-400">
            {correct}
          </h2>
        </div>

        <div className="h-14 w-px bg-white/10" />

        <div className="text-center">
          <p className="text-sm text-slate-400">
            Passed
          </p>

          <h2 className="mt-1 text-3xl font-black text-red-400">
            {passed}
          </h2>
        </div>
      </div>
    </motion.div>
  );
}