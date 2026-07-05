import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import categories from "../data/categories";
import decks from "../data/decks";

export default function Decks() {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const deckList = decks[categoryId] || [];

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Category not found.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button
          onClick={() => navigate("/categories")}
          className="mb-6 flex items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={20} />
          Categories
        </button>

        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15 text-4xl">
            {category.icon}
          </div>

          <div>
            <h1 className="text-4xl font-black text-white">
              {category.title}
            </h1>

            <p className="mt-1 text-slate-400">
              Choose a deck
            </p>
          </div>
        </div>
      </motion.div>

      {/* Deck List */}

      <div className="space-y-4">
        {deckList.map((deck) => (
          <motion.button
            key={deck.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              navigate(`/play/${categoryId}/${deck.id}`)
            }
            className="group flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5 transition hover:border-orange-400/30 hover:bg-[#1B2638]"
          >
            <div className="text-left">
              <h2 className="text-xl font-semibold text-white">
                {deck.title}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {deck.description}
              </p>
            </div>

            <ChevronRight
              className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-orange-400"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}