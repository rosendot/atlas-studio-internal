"use client";

import { useState } from "react";

export interface LogoWallProps {
  columns: number;
  sectionTitle: string;
}

const defaults: LogoWallProps = {
  columns: 5,
  sectionTitle: "Trusted By",
};

const logos = ["Acme Co", "Globex", "Initech", "Umbrella", "Wonka", "Stark", "Wayne", "Oscorp", "Cyberdyne", "Tyrell"];

export default function LogoWall(props: Partial<LogoWallProps>) {
  const v = { ...defaults, ...props };
  const cols = typeof v.columns === "string" ? Number(v.columns) : v.columns;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>Logo Wall</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Client logos &mdash; grayscale to color on hover</p>
      </div>
      <div style={{ maxWidth: "var(--max-w-lg)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", opacity: 0.5, color: "var(--color-text-light)" }}>{v.sectionTitle}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "var(--space-8)", alignItems: "center" }}>
          {logos.map((name, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-6)",
                filter: hoveredIndex === i ? "grayscale(0%)" : "grayscale(100%)",
                opacity: hoveredIndex === i ? 1 : 0.5,
                transition: "filter 0.3s, opacity 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span style={{ fontSize: "var(--text-lg)", fontWeight: 700, letterSpacing: "var(--tracking-tight)", color: "var(--color-text)", whiteSpace: "nowrap" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
