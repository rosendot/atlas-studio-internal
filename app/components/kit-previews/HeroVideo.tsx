"use client";

import { useEffect, useRef } from "react";

export interface HeroVideoProps {
  minHeight: string;
  overlayColor: string;
  fallbackBg: string;
  maxWidth: string;
}

const defaultProps: HeroVideoProps = {
  minHeight: "90vh",
  overlayColor: "rgba(26, 18, 8, 0.65)",
  fallbackBg: "#1a1208",
  maxWidth: "750px",
};

export default function HeroVideo(props: Partial<HeroVideoProps>) {
  const v = { ...defaultProps, ...props };
  const bgRef = useRef<HTMLDivElement>(null);

  // Animate the fake video background
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let pos = 0;
    let raf: number;
    const animate = () => {
      pos = (pos + 0.15) % 400;
      el.style.backgroundPosition = `${pos}% 50%`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      {/* Standard section header */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-4xl)",
            fontWeight: 700,
            color: "var(--color-dark)",
            margin: "0 0 var(--space-2)",
            lineHeight: "var(--leading-snug)",
          }}
        >
          Hero Video
        </h2>
        <p
          style={{
            fontSize: "var(--text-xl)",
            color: "var(--color-text-light)",
            margin: 0,
          }}
        >
          Looping background video with overlay and centered text
        </p>
      </div>

      {/* Hero preview */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: v.minHeight,
          background: v.fallbackBg,
          color: "var(--color-white)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--radius-lg)",
        }}
      >
        {/* Simulated video background */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, #8B6914 0%, #5a3e0a 25%, #3d2a06 50%, #5a3e0a 75%, #8B6914 100%)",
            backgroundSize: "400% 400%",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: v.overlayColor,
            zIndex: 1,
          }}
        />

        {/* Play badge */}
        <div
          style={{
            position: "absolute",
            top: "var(--space-6)",
            right: "var(--space-6)",
            zIndex: 3,
            background: "rgba(0,0,0,0.5)",
            color: "var(--color-white)",
            padding: "var(--space-1) var(--space-3)",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking-tight)",
            textTransform: "uppercase",
          }}
        >
          &#9654; Video Background
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: v.maxWidth,
            padding: "var(--space-8)",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-sm)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-wide)",
              marginBottom: "var(--space-4)",
              fontWeight: 600,
              color: "var(--color-secondary)",
            }}
          >
            Welcome to
          </p>
          <h1
            style={{
              fontSize: "var(--text-5xl)",
              lineHeight: "var(--leading-tight)",
              marginBottom: "var(--space-5)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Your City&rsquo;s Home for
            <br />
            Authentic Cuisine
          </h1>
          <p
            style={{
              fontSize: "var(--text-xl)",
              lineHeight: "var(--leading-loose)",
              opacity: "var(--opacity-soft)",
              marginBottom: "var(--space-10)",
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Bold flavors and family tradition &mdash; every dish is crafted with
            recipes passed down through generations. Made fresh, served with
            love.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "var(--space-3) var(--space-8)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-normal)",
                borderRadius: "var(--radius-md)",
                background: "var(--color-primary)",
                color: "var(--color-white)",
                border: "2px solid var(--color-primary)",
              }}
            >
              View Menu
            </span>
            <span
              style={{
                display: "inline-block",
                padding: "var(--space-3) var(--space-8)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-normal)",
                borderRadius: "var(--radius-md)",
                background: "transparent",
                color: "var(--color-white)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              Our Story
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
