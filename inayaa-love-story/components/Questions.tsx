"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/data/content.json";
import SectionHeading from "./SectionHeading";
import ThreadDivider from "./ThreadDivider";
import HeartExplosion from "./HeartExplosion";

function QuestionCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative mx-auto mb-14 max-w-md overflow-hidden rounded-[28px] glass p-6 text-center shadow-glow-soft sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

function ResponseBubble({ text }: { text: string }) {
  return (
    <motion.p
      className="mt-5 font-script text-2xl text-lavender-500"
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.p>
  );
}

function LoveMeter() {
  const q = content.questions.love_meter;
  const [response, setResponse] = useState<string | null>(null);
  const [boom, setBoom] = useState(false);

  const handle = (opt: (typeof q.options)[number]) => {
    setResponse(opt.response);
    if (opt.value === -1) {
      setBoom(true);
      setTimeout(() => setBoom(false), 1600);
    }
  };

  return (
    <QuestionCard>
      <p className="font-display text-xl italic text-blush-600">{q.prompt}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        {q.options.map((opt) => (
          <motion.button
            key={opt.label}
            onClick={() => handle(opt)}
            className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-blush-600 shadow-sm ring-1 ring-blush-200 transition-colors hover:bg-blush-100"
            whileTap={{ scale: 0.92 }}
          >
            ❤️ {opt.label}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {response && <ResponseBubble key={response} text={response} />}
      </AnimatePresence>
      <AnimatePresence>
        {boom && (
          <div className="absolute inset-0 z-10">
            <HeartExplosion />
          </div>
        )}
      </AnimatePresence>
    </QuestionCard>
  );
}

function SimpleQuestion({
  data
}: {
  data: { prompt: string; options: { label: string; response: string }[] };
}) {
  const [response, setResponse] = useState<string | null>(null);
  return (
    <QuestionCard>
      <p className="font-display text-xl italic text-blush-600">{data.prompt}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        {data.options.map((opt) => (
          <motion.button
            key={opt.label}
            onClick={() => setResponse(opt.response)}
            className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-blush-600 shadow-sm ring-1 ring-blush-200 transition-colors hover:bg-blush-100"
            whileTap={{ scale: 0.92 }}
          >
            ❤️ {opt.label}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {response && <ResponseBubble key={response} text={response} />}
      </AnimatePresence>
    </QuestionCard>
  );
}

function ForeverQuestion() {
  const q = content.questions.forever;
  const [joined, setJoined] = useState(false);

  return (
    <QuestionCard>
      <p className="font-display text-xl italic text-blush-600">{q.prompt}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        {q.options.map((opt) => (
          <motion.button
            key={opt.label}
            onClick={() => setJoined(true)}
            className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-blush-600 shadow-sm ring-1 ring-blush-200 transition-colors hover:bg-blush-100"
            whileTap={{ scale: 0.92 }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>

      <div className="relative mt-8 flex h-16 items-center justify-center">
        <AnimatePresence>
          {joined && (
            <>
              <motion.span
                className="absolute text-4xl"
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: -8, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                ❤
              </motion.span>
              <motion.span
                className="absolute text-4xl"
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 8, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                ❤
              </motion.span>
              <motion.span
                className="absolute text-5xl text-blush-500"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                style={{ filter: "drop-shadow(0 0 20px rgba(247,109,149,0.6))" }}
              >
                💞
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {joined && <ResponseBubble text={q.response} />}
      </AnimatePresence>
    </QuestionCard>
  );
}

export default function Questions() {
  return (
    <section className="relative px-4 py-16 sm:px-8" id="questions">
      <ThreadDivider flip />
      <SectionHeading eyebrow="Just a little quiz" title="A Few Cute Questions" />
      <LoveMeter />
      <SimpleQuestion data={content.questions.do_you_love_me} />
      <SimpleQuestion data={content.questions.cutest} />
      <ForeverQuestion />
    </section>
  );
}
