import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={clsx(
        "bg-glass border border-glass-border backdrop-blur-md rounded-3xl p-6 shadow-xl relative overflow-hidden",
        className
      )}
    >
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {children}
    </motion.div>
  );
}