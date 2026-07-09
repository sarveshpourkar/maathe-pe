import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-slate-400 transition-all duration-200 hover:-translate-x-1 hover:text-orange-400"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <h1 className="text-5xl font-black tracking-tight text-white">
  Choose Your
  <span className="block text-orange-400">
    Category
  </span>
</h1>

<p className="mt-4 max-w-md leading-7 text-slate-400">
  Pick your favorite topic, choose a deck,
  and let the guessing begin.
</p>

<div className="mt-8 flex flex-wrap gap-3">

  <div className="rounded-full border border-white/10 bg-[#121D2D] px-4 py-2">
    <span className="text-sm font-semibold text-orange-400">
      9 Categories
    </span>
  </div>

  <div className="rounded-full border border-white/10 bg-[#121D2D] px-4 py-2">
    <span className="text-sm font-semibold text-orange-400">
      45 Decks
    </span>
  </div>

  <div className="rounded-full border border-white/10 bg-[#121D2D] px-4 py-2">
    <span className="text-sm font-semibold text-orange-400">
      3000+ Cards
    </span>
  </div>

</div>
      </motion.div>

      {/* Category List */}

      <div className="mt-10 space-y-5">
        {categories.map((category, index) => (
  <motion.div
  key={category.id}
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.05,
    duration: 0.35,
  }}
>
    <CategoryCard
      title={category.title}
      description={category.description}
      icon={category.icon}
      decks={category.decks}
      color={category.color}
      onClick={() =>
        navigate(`/categories/${category.id}`)
      }
    />
  </motion.div>
))}
      </div>
    </div>
  );
}