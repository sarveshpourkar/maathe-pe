import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "w-full rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400/40 cursor-pointer";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-400 active:scale-[0.98] shadow-lg shadow-orange-500/20",

    secondary:
      "bg-[#121D2D] text-white border border-white/10 hover:border-orange-400/40 hover:bg-[#182538]",

    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}