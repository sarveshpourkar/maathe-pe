import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import categories from "../data/categories";
import decks from "../data/decks";
import { getWords } from "../data/words";
import useTimer from "../hooks/useTimer";
import shuffle from "../utils/shuffle";
import useDeviceTilt from "../hooks/useDeviceTilt";

import correctSound from "../assets/sounds/correct.mp3";
import passSound from "../assets/sounds/pass.mp3";

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

  const [gameLocked, setGameLocked] = useState(false);

  const correctAudio = new Audio(correctSound);
  const passAudio = new Audio(passSound);

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

  function nextWord() {
    setCurrentIndex((i) => {
      if (i + 1 >= words.length) {
        setWords(shuffle([...words]));
        return 0;
      }
      return i + 1;
    });
  }

  function handleTilt(direction) {
    if (gameLocked) return;

    setGameLocked(true);

    if (direction === "correct") {
  correctAudio.currentTime = 0;
  correctAudio.play();

  setCorrect((c) => c + 1);
} else {
  passAudio.currentTime = 0;
  passAudio.play();

  setPassed((p) => p + 1);
}

    nextWord();

    setTimeout(() => {
      setGameLocked(false);
    }, 1500);
  }

  useDeviceTilt({
    onTilt: handleTilt,
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

        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-400/30 bg-orange-500/10 shadow-lg shadow-orange-500/20">
          <span className="text-3xl font-black text-orange-400">
            {timeLeft}
          </span>
        </div>
      </div>

      {/* Word Card */}

      <div className="flex flex-1 items-center justify-center">
        <motion.div
          key={currentWord}
          layout

          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}

          className="flex h-80 w-full items-center justify-center rounded-[40px] border border-white/10 bg-[#151E2E] p-10 shadow-2xl shadow-black/30"
        >
          <h2 className="text-center text-6xl font-black uppercase tracking-wide text-white">
            {currentWord}
          </h2>
        </motion.div>
      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          onClick={() => handleTilt("correct")}
          className="rounded-3xl bg-green-500 py-5 text-xl font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-green-400 active:scale-95"
        >
          Correct
        </button>

        <button
          onClick={() => handleTilt("pass")}
          className="rounded-3xl bg-red-500 py-5 text-xl font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-400 active:scale-95"
        >
          Pass
        </button>
      </div>

      {/* Bottom Score */}

      <div className="mb-2 flex justify-between rounded-3xl border border-white/10 bg-[#151E2E] px-6 py-5 shadow-lg shadow-black/20">
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