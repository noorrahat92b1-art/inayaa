"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import ThreadDivider from "./ThreadDivider";

export default function LoveLetter() {
  const { salutation, paragraphs, signoff } = content.love_letter;

  return (
    <section className="relative px-4 py-16 sm:px-8" id="letter">
      <ThreadDivider />
      <motion.div
        className="mx-auto max-w-lg rounded-[32px] glass-deep p-8 shadow-glow-soft sm:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="font-script text-3xl text-blush-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {salutation}
        </motion.p>

        <div className="mt-5 space-y-4">
          {paragraphs.map((line, i) => (
            <motion.p
              key={i}
              className="font-script text-xl leading-relaxed text-blush-500 sm:text-2xl"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: i * 0.35 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.span
          className="mt-6 block text-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: paragraphs.length * 0.35 + 0.3, duration: 0.6, type: "spring" }}
        >
          {signoff}
        </motion.span>
      </motion.div>
    </section>
  );
}
