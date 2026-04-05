"use client";

import { useState, useEffect, useCallback } from "react";

export interface TestimonialSliderProps {
  interval: number;
  sectionTitle: string;
}

const defaults: TestimonialSliderProps = {
  interval: 6000,
  sectionTitle: "What Our Clients Say",
};

const testimonials = [
  { quote: "Amazing service and incredible food. We come back every week.", name: "Sarah M.", role: "Regular Customer", stars: 5 },
  { quote: "The best dining experience in the city. Highly recommend the tasting menu.", name: "James R.", role: "Food Critic", stars: 5 },
  { quote: "Perfect for date night. The atmosphere is warm and the staff is wonderful.", name: "Emily T.", role: "Local Guide", stars: 5 },
];

export default function TestimonialSlider(props: Partial<TestimonialSliderProps>) {
  const v = { ...defaults, ...props };
  const intervalMs = typeof v.interval === "string" ? Number(v.interval) : v.interval;
  const [active, setActive] = useState(0);

  const goTo = useCallback((i: number) => setActive(i % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>{v.sectionTitle}</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Auto-rotating single testimonial with crossfade</p>
      </div>
      <div style={{ maxWidth: "var(--max-w-sm)", margin: "0 auto", textAlign: "center" }}>
        <div style={{ position: "relative", minHeight: 220 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ position: i === active ? "relative" : "absolute", inset: 0, opacity: i === active ? 1 : 0, transition: "opacity 0.6s ease", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: "var(--space-6)", color: "var(--color-secondary)" }}>
                {Array.from({ length: t.stars }).map((_, s) => <span key={s}>&#9733;</span>)}
              </div>
              <div style={{ fontSize: "var(--text-3xl)", lineHeight: 1, opacity: 0.3, marginBottom: "var(--space-4)", color: "var(--color-secondary)" }}>&ldquo;</div>
              <p style={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-loose)", opacity: 0.85, maxWidth: 600, marginBottom: "var(--space-6)", fontStyle: "italic", color: "var(--color-text)" }}>{t.quote}</p>
              <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-dark)", marginBottom: "var(--space-1)" }}>{t.name}</div>
              <div style={{ fontSize: "var(--text-sm)", opacity: 0.6, color: "var(--color-text-light)" }}>{t.role}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center", marginTop: "var(--space-8)" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: 10, height: 10, borderRadius: "var(--radius-full)", background: "var(--color-dark)", border: "none", cursor: "pointer", padding: 0, opacity: active === i ? 1 : 0.3, transition: "opacity 0.3s" }} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
