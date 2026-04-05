"use client";

import { useState, useEffect, useCallback } from "react";

export interface HeroSlideshowProps {
  minHeight: string;
  overlayColor: string;
  interval: number;
  maxWidth: string;
}

const defaultProps: HeroSlideshowProps = {
  minHeight: "90vh",
  overlayColor: "rgba(26, 18, 8, 0.55)",
  interval: 5000,
  maxWidth: "750px",
};

const SLIDE_GRADIENTS = [
  "linear-gradient(135deg, #8B6914 0%, #5a3e0a 50%, #3d2a06 100%)",
  "linear-gradient(135deg, #3d2a06 0%, #1a1208 50%, #5a3e0a 100%)",
  "linear-gradient(135deg, #5a3e0a 0%, #8B6914 50%, #3d2a06 100%)",
];

export default function HeroSlideshow(props: Partial<HeroSlideshowProps>) {
  const v = { ...defaultProps, ...props };
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (i: number) => setActive(i % SLIDE_GRADIENTS.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDE_GRADIENTS.length);
    }, v.interval);
    return () => clearInterval(timer);
  }, [v.interval]);

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
          Hero Slideshow
        </h2>
        <p
          style={{
            fontSize: "var(--text-xl)",
            color: "var(--color-text-light)",
            margin: 0,
          }}
        >
          Auto-rotating backgrounds with crossfade transitions
        </p>
      </div>

      {/* Hero preview */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: v.minHeight,
          background: "var(--color-dark)",
          color: "var(--color-white)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--radius-lg)",
        }}
      >
        {/* Slide backgrounds */}
        {SLIDE_GRADIENTS.map((gradient, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: gradient,
              opacity: active === i ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
              zIndex: 0,
            }}
          />
        ))}

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

        {/* Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "var(--space-8)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "var(--space-2)",
            zIndex: 3,
          }}
        >
          {SLIDE_GRADIENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "var(--radius-full)",
                background:
                  active === i ? "var(--color-white)" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "background 0.3s",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
