import { motion } from "framer-motion";
import {
  ArrowRight,
  Clapperboard,
  Trophy,
  UtensilsCrossed,
  Laugh,
  Play,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Movies",
      decks: "8 Decks",
      icon: Clapperboard,
    },
    {
      title: "Sports",
      decks: "6 Decks",
      icon: Trophy,
    },
    {
      title: "Food",
      decks: "7 Decks",
      icon: UtensilsCrossed,
    },
    {
      title: "Memes",
      decks: "5 Decks",
      icon: Laugh,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="pt-12"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
          Maathe Pe
        </p>

        <h1 className="mt-5 text-5xl font-black leading-tight text-white">
          Think Fast.
          <br />
          Laugh Hard.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
          Place your phone on your forehead, let your friends give clues,
          and guess as many words as you can before the timer runs out.
        </p>

        <div className="mt-10">
          <Button onClick={() => navigate("/categories")}>
            <Play size={20} />
            Start Playing
          </Button>
        </div>
      </motion.section>

      {/* Categories */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-14"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Popular Categories
          </h2>

          <button
            onClick={() => navigate("/categories")}
            className="flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300"
          >
            See all

            <ArrowRight size={16} />
          </button>
        </div>

        <div className="space-y-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                onClick={() => navigate("/categories")}
                className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#121D2D] p-5 transition-all duration-200 hover:border-orange-400/40 hover:bg-[#182538]"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-orange-500/10 p-3">
                    <Icon
                      size={24}
                      className="text-orange-400"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {category.decks}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-500"
                />
              </button>
            );
          })}
        </div>
      </motion.section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}