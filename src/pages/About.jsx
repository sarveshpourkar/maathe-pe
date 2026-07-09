import { motion } from "framer-motion";
import { ArrowLeft, Heart, Info, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col px-6 py-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-slate-400 transition-all duration-200 hover:-translate-x-1 hover:text-orange-400"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <h1 className="text-5xl font-black text-white">
          About
        </h1>

        <p className="mt-3 max-w-md leading-7 text-slate-400">
          Made for friends, laughter and unforgettable game nights.
        </p>
      </motion.div>

      {/* Logo */}

      <div className="mt-12 flex justify-center">
        <img
          src="/logo.png"
          alt="Maathe Pe Logo"
          className="h-36 w-36 object-contain drop-shadow-[0_10px_30px_rgba(249,115,22,0.35)]"
        />
      </div>

      {/* App Name */}

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-black text-white">
          Maathe Pe
        </h2>

        <p className="mt-2 text-slate-400">
          The Ultimate Indian Heads Up Game
        </p>
      </div>

      {/* Info Cards */}

      <div className="mt-12 space-y-4">

        <div className="rounded-3xl border border-white/10 bg-[#151E2E] p-5">
          <div className="flex items-center gap-3">
            <Info className="text-orange-400" />

            <div>
              <h3 className="font-semibold text-white">
                Version
              </h3>

              <p className="text-slate-400">
                1.0.0
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#151E2E] p-5">
          <div className="flex items-center gap-3">
            <Heart className="text-red-400" />

            <div>
              <h3 className="font-semibold text-white">
                Crafted with ❤️ by
              </h3>

              <p className="text-slate-400">
                Sarvesh Pourkar
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#151E2E] p-5">
          <div className="flex items-center gap-3">
            <Code2 className="text-orange-400" />

            <div>
              <h3 className="font-semibold text-white">
                Open Source
              </h3>

              <p className="text-slate-400">
                Built using React + Vite
              </p>
            </div>
          </div>
        </div>

      </div>

      <p className="mt-auto pt-10 text-center text-sm text-slate-500">
        © 2026 Maathe Pe. All Rights Reserved.
      </p>

    </div>
  );
}