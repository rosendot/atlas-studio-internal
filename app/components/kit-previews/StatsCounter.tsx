"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { target: 500, suffix: "+", label: "Happy Clients" },
  { target: 15, suffix: "", label: "Years Experience" },
  { target: 50, suffix: "+", label: "Team Members" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function StatsCounter() {
  const [animated, setAnimated] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setValues(stats.map((s) => Math.floor(eased * s.target)));
            if (progress < 1) requestAnimationFrame(animate);
            else setValues(stats.map((s) => s.target));
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>Stats Counter</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Animated numbers that count up on scroll</p>
      </div>
      <div ref={ref} style={{ background: "var(--color-dark)", color: "var(--color-cream)", borderRadius: "var(--radius-lg)", padding: "var(--space-16) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--max-w-md)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-8)", textAlign: "center" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ padding: "var(--space-6)", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-5xl)", fontWeight: 700, lineHeight: "var(--leading-tight)", marginBottom: "var(--space-2)", color: "var(--color-secondary)" }}>
                {values[i].toLocaleString()}{stat.suffix}
              </div>
              <div style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", opacity: 0.6, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
