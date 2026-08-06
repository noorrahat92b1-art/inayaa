"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  return (
    <section className="relative px-4 py-16 sm:px-8" id="memories">
      <SectionHeading eyebrow="Our story so far" title="Our Memories" subtitle="A thread of moments I never want to forget." />

      <div className="relative mx-auto max-w-md">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blush-300 via-lavender-300 to-peach-300 sm:left-1/2" />

        <div className="space-y-10">
          {content.timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className={`relative flex flex-col gap-4 pl-14 sm:pl-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } sm:items-center`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="absolute left-3.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-blush-500 shadow-glow-soft ring-2 ring-blush-300 sm:left-1/2 sm:-translate-x-1/2">
                ❤
              </span>

              <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                <div className="overflow-hidden rounded-2xl border border-white/60 shadow-glow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                </div>
              </div>

              <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pl-8" : "sm:pr-8 sm:text-right"}`}>
                <p className="font-display text-lg italic text-blush-600">{item.title}</p>
                <p className="font-body text-xs uppercase tracking-wide text-lavender-500">{item.date}</p>
                <p className="mt-1 font-script text-lg text-blush-500">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
