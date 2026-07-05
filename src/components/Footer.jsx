import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-14 border-t border-white/10 pt-6 pb-2 text-center"
    >
      <p className="text-sm text-slate-400">
        Crafted by{" "}
        <span className="font-semibold text-white">
          Sarvesh Pourkar
        </span>
      </p>

      <p className="mt-2 text-xs tracking-wide text-slate-500">
        Version 1.0.0
      </p>
    </motion.footer>
  );
}