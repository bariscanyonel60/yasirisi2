"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "/images/marketing/header-banner.jpg",
    alt: "Yalçın Isı — pelet sobası, güneş paneli, rüzgâr ve kangal boru",
  },
  {
    src: "/images/marketing/header-banner-2.jpg",
    alt: "Yalçın Isı — Tokat güneş enerjisi: panel, kolektör ve rüzgâr",
  },
] as const;

const INTERVAL_MS = 6000;

type Props = {
  /** Hero metin alanı üstte; carousel arka plan */
  overlay?: boolean;
};

export function HeaderCarousel({ overlay = false }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <div
      className={
        overlay
          ? "absolute inset-0 overflow-hidden"
          : "relative aspect-[16/9] w-full overflow-hidden bg-navy-900"
      }
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-900/70 to-navy-900/35"
          aria-hidden
        />
      )}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-900/40"
          aria-hidden
        />
      )}

      <button
        type="button"
        onClick={prev}
        aria-label="Önceki görsel"
        className="focus-ring absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-navy-900 shadow-soft hover:bg-white md:left-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Sonraki görsel"
        className="focus-ring absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-navy-900 shadow-soft hover:bg-white md:right-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Görsel ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goTo(i)}
            className={`focus-ring h-2 rounded-full transition-all ${
              i === index ? "w-7 bg-ember-500" : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
