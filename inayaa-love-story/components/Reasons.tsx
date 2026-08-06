"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import SectionHeading from "./SectionHeading";
import ThreadDivider from "./ThreadDivider";

export default function Reasons() {
  return (
    <section className="relative px-4 py-16 sm:px-8" id="reasons">
      <ThreadDivider />
      <SectionHeading eyebrow="Not that I could ever list them all" title={`Reasons I Love ${content.her_name}`} />

      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        {content.reasons.map((reason, i) => (
          <motion.div
            key={reason}
            className="flex min-h-[92px] flex-col items-center justify-center gap-2 rounded-2xl glass p-4 text-center shadow-glow-soft"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? -2 : 2 }}
          >
            <span className="text-lg">❤️</span>
            <p className="font-body text-sm font-medium text-blush-600">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
