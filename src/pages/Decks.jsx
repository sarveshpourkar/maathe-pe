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
          className="mb-8 flex items-center gap-2 text-slate-400 transition-all duration-200 hover:-translate-x-1 hover:text-orange-400"
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

            <p className="mt-2 max-w-sm leading-6 text-slate-400">
            Pick a deck and start guessing with your friends.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

  <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1">
    <span className="text-xs font-semibold text-orange-400">
      {deckList.length} Decks
    </span>
  </div>

  <div className="rounded-full border border-white/10 bg-[#151E2E] px-3 py-1">
    <span className="text-xs font-semibold text-slate-300">
      3000+ Cards
    </span>
  </div>

</div>
          </div>
        </div>
      </motion.div>

      {/* Deck List */}

      <div className="space-y-4">
        {deckList.map((deck) => (
          <motion.button
            key={deck.id}
            whileHover={{
            y: -4,
            scale: 1.01,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              navigate(`/play/${categoryId}/${deck.id}`)
            }
            className="group flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:border-orange-400/40 hover:bg-[#1B2638] hover:shadow-orange-500/10"
          >
            <div className="text-left">
              <h2 className="text-xl font-semibold text-white">
                {deck.title}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {deck.description}
              </p>

              <div className="mt-3 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1">
  <span className="text-xs font-semibold text-orange-400">
    Play Deck
  </span>
</div> 

            </div>

            <div className="rounded-full bg-white/5 p-3 transition-all duration-300 group-hover:bg-orange-500/15">
  <ChevronRight
    size={20}
    className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400"
  />
</div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}