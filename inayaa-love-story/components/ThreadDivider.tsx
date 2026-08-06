"use client";

import { motion } from "framer-motion";

/**
 * The site's signature motif: a hand-drawn "thread of fate" that winds
 * from section to section, with a small charm heart knotted at its center.
 * It stands in for the idea that every part of the story is tied to the same
 * thread of love.
 */
export default function ThreadDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative flex justify-center py-6 md:py-10">
      <svg
        width="220"
        height="48"
        viewBox="0 0 220 48"
        fill="none"
        className={flip ? "scale-x-[-1]" : ""}
      >
        <motion.path
          d="M4 24 C 50 4, 80 44, 110 24 S 170 4, 216 24"
          stroke="url(#threadGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="threadGradient" x1="0" y1="0" x2="220" y2="0">
            <stop offset="0%" stopColor="#ffb3c6" />
            <stop offset="50%" stopColor="#c3a0ff" />
            <stop offset="100%" stopColor="#ffc180" />
          </linearGradient>
        </defs>
      </svg>
      <motion.span
        className="absolute top-1/2 -translate-y-1/2 text-blush-500 text-lg"
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
      >
        ❤
      </motion.span>
    </div>
  );
}
