"use client";

import { useEffect, useRef, useState } from "react";

export interface TickerItem {
  quote: string;
  name: string;
  role: string;
}

interface Props {
  items: TickerItem[];
  intervalMs?: number; // time each card stays visible
}

/**
 * Shows ONE card at a time. Every few seconds the track moves up so the next card
 * slides in from the bottom. No scrollbar: the viewport simply clips the track.
 */
export default function QuoteTicker({ items, intervalMs = 4000 }: Props) {
  const n = items.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [reduced, setReduced] = useState(false);
  const paused = useRef(false);

  // Respect "reduce motion": swap cards instantly instead of sliding.
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (n < 2) return;
    const id = setInterval(() => {
      if (paused.current) return;
      // Reduced motion wraps directly; otherwise we slide onto a cloned first card (index === n).
      setIndex((i) => (reduced ? (i + 1) % n : i + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [n, intervalMs, reduced]);

  // After sliding onto the cloned first card, jump back to the real first card without animation.
  function handleTransitionEnd() {
    if (index === n) {
      setAnimate(false);
      setIndex(0);
    }
  }
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  if (n === 0) return null;
  const slides = n > 1 ? [...items, items[0]] : items;

  return (
    <div
      className="ticker"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        className="ticker-track"
        style={{
          transform: `translateY(calc(-1 * ${index} * var(--ticker-h)))`,
          transition: animate && !reduced ? "transform 700ms ease" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((q, i) => (
          <figure className="ticker-card" key={i} aria-hidden={n > 1 && i !== index % (n + 1) ? true : undefined}>
            <blockquote>{q.quote}</blockquote>
            <figcaption>{q.name}, {q.role}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}