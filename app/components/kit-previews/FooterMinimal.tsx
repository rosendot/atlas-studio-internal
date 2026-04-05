"use client";

export interface FooterMinimalProps {
  sectionTitle: string;
}

const defaults: FooterMinimalProps = {
  sectionTitle: "",
};

export default function FooterMinimal(props: Partial<FooterMinimalProps>) {
  const v = { ...defaults, ...props };

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>
          Footer Minimal
        </h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>
          Clean single-line footer with logo, copyright, and social icons
        </p>
      </div>

      {/* Footer preview */}
      <footer style={{ background: "var(--color-dark)", color: "var(--color-cream)", borderRadius: "var(--radius-lg)", overflow: "hidden", padding: "var(--space-8)" }}>
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "var(--space-8)" }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-lg)", fontWeight: 700 }}>Business Name</div>
          <span style={{ fontSize: "var(--text-xs)", opacity: 0.5 }}>&copy; 2026 Business Name. All rights reserved.</span>
          <div style={{ display: "flex", gap: "var(--space-3)" }}>
            {["FB", "IG", "YP"].map((label) => (
              <span key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.1)", fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-cream)" }}>{label}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
