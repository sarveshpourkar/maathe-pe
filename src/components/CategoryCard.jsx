import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const colorMap = {
  amber: "bg-amber-500/15 text-amber-400",
  green: "bg-emerald-500/15 text-emerald-400",
  red: "bg-red-500/15 text-red-400",
  pink: "bg-pink-500/15 text-pink-400",
  blue: "bg-sky-500/15 text-sky-400",
  yellow: "bg-yellow-500/15 text-yellow-400",
  purple: "bg-purple-500/15 text-purple-400",
  indigo: "bg-indigo-500/15 text-indigo-400",
  emerald: "bg-emerald-500/15 text-emerald-400",
  orange: "bg-orange-500/15 text-orange-400",
};

export default function CategoryCard({
  title,
  description,
  icon,
  decks,
  color,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
       y: -4,
       scale: 1.01,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-3xl border border-white/10 bg-[#151E2E] p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:border-orange-400/40 hover:bg-[#1B2638] hover:shadow-orange-500/10"
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-3xl text-3xl ${
            colorMap[color] || colorMap.orange
          }`}
        >
          {icon}
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>

          <div className="mt-3 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1">
  <span className="text-xs font-semibold text-orange-400">
    {decks} Deck{decks > 1 ? "s" : ""}
  </span>
</div>
        </div>
      </div>

      <div className="rounded-full bg-white/5 p-3 transition-all duration-300 group-hover:bg-orange-500/15">
  <ArrowRight
    size={20}
    className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400"
  />
</div>
    </motion.button>
  );
}