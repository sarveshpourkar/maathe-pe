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
        <div className="flex justify-center">
        
         <div className="absolute h-44 w-44 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-2xl" />
  <img
    src="/logo.png"
    alt="Maathe Pe Logo"
    className="h-40 w-40 object-contain"
  />
</div>



        <h1 className="mt-5 text-5xl font-black leading-tight text-white">
          Think Fast.
          <br />
          Guess Faster.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
          The ultimate Heads Up party game.
Tilt your phone, guess the word,
and see who becomes the champion.
        </p>

        <div className="mt-10">
          <Button onClick={() => navigate("/categories")}>
            <Play size={22} fill="currentColor" />
            Start Playing
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">

  <div className="rounded-2xl border border-white/10 bg-[#121D2D] p-4 text-center">
    <h3 className="text-2xl font-black text-orange-400">
      9
    </h3>
    <p className="mt-1 text-xs text-slate-400">
      Categories
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-[#121D2D] p-4 text-center">
    <h3 className="text-2xl font-black text-orange-400">
      45
    </h3>
    <p className="mt-1 text-xs text-slate-400">
      Decks
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-[#121D2D] p-4 text-center">
    <h3 className="text-2xl font-black text-orange-400">
      3000+
    </h3>
    <p className="mt-1 text-xs text-slate-400">
      Cards
    </p>
  </div>

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