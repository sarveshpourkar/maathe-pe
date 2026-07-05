import { motion } from "framer-motion";

export default function Container({ children }) {
  return (
    <div className="min-h-screen bg-[#08111D] text-white">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-8 sm:px-8"
      >
        {children}
      </motion.main>
    </div>
  );
}