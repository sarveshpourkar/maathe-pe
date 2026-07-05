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
          className="mb-6 flex items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <h1 className="text-4xl font-black text-white">
          Categories
        </h1>

        <p className="mt-2 text-slate-400">
          Choose a category and start the fun.
        </p>
      </motion.div>

      {/* Category List */}

      <div className="space-y-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            decks={category.decks}
            color={category.color}
            onClick={() =>
              navigate(`/categories/${category.id}`)
            }
          />
        ))}
      </div>
    </div>
  );
}