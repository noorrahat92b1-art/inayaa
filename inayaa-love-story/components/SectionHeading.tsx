"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 flex flex-col items-center text-center">
      {eyebrow && (
        <motion.span
          className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-lavender-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className="font-display text-3xl italic text-blush-600 sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-3 max-w-md font-body text-sm text-blush-500/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
