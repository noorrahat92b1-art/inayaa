"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import content from "@/data/content.json";

const images = Array.from({ length: 15 }, (_, i) => ({
  src: `/images/image${i + 1}.jpg`,
  caption: content.gallery_captions[i] ?? "❤️"
}));

export default function Gallery() {
  return (
    <section className="relative px-4 py-16 sm:px-8" id="gallery">
      <SectionHeading
        eyebrow="A little collection"
        title="Every Picture, A Piece of My Heart"
        subtitle="Swipe through a few of my favorite moments with you."
      />

      {/* Carousel */}
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-8 sm:px-8">
        {images.slice(0, 8).map((img, i) => (
          <motion.div
            key={img.src}
            className="relative aspect-[3/4] w-56 shrink-0 snap-center overflow-hidden rounded-[28px] border border-white/60 shadow-glow-soft sm:w-64"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.caption}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/50" />
            <p className="absolute bottom-3 left-0 right-0 text-center font-script text-xl text-white drop-shadow">
              ❤️ {img.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Polaroid wall */}
      <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
        {images.slice(8, 15).map((img, i) => {
          const rotation = i % 2 === 0 ? -4 - (i % 3) : 4 + (i % 3);
          return (
            <motion.div
              key={img.src}
              className="relative rounded-lg bg-white p-2.5 pb-8 shadow-glow-soft"
              style={{ rotate: rotation }}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.caption} className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-center font-script text-base text-blush-600">
                ❤️ {img.caption}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
