"use client";

export interface HeroSplitProps {
  minHeight: string;
  contentSide: string;
  imageBg: string;
}

const defaultProps: HeroSplitProps = {
  minHeight: "80vh",
  contentSide: "left",
  imageBg: "#8B6914",
};

export default function HeroSplit(props: Partial<HeroSplitProps>) {
  const v = { ...defaultProps, ...props };
  const isRight = v.contentSide === "right";

  const contentBlock = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "var(--space-16) var(--space-12)",
        background: "var(--color-dark)",
        color: "var(--color-cream)",
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
          color: "var(--color-cream)",
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
          opacity: "var(--opacity-muted)",
          marginBottom: "var(--space-10)",
          maxWidth: 500,
        }}
      >
        Bold flavors and family tradition &mdash; every dish is crafted with
        recipes passed down through generations.
      </p>
      <div
        style={{
          display: "flex",
          gap: "var(--space-4)",
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
            color: "var(--color-cream)",
            border: "2px solid rgba(250,246,240,0.4)",
          }}
        >
          Our Story
        </span>
      </div>
    </div>
  );

  const imageBlock = (
    <div
      style={{
        background: `linear-gradient(135deg, ${v.imageBg} 0%, #5a3e0a 50%, #3d2a06 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
      }}
    />
  );

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
          Hero Split
        </h2>
        <p
          style={{
            fontSize: "var(--text-xl)",
            color: "var(--color-text-light)",
            margin: 0,
          }}
        >
          50/50 split with text and image &mdash; content {v.contentSide}
        </p>
      </div>

      {/* Hero preview */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: v.minHeight,
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        {isRight ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </section>
    </div>
  );
}
