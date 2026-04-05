"use client";

export default function HeaderTransparent() {
  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>Header Transparent</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Overlay header that goes solid on scroll</p>
      </div>
      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative" }}>
        {/* Simulated hero background */}
        <div style={{ background: "linear-gradient(135deg, #8B6914, #3d2a06)", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Transparent header overlay */}
          <header style={{ position: "absolute", top: 0, left: 0, right: 0, color: "var(--color-cream)", zIndex: 2 }}>
            <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-8)", height: 72 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700 }}>Business Name</span>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
                {["Home", "Menu", "About", "Contact"].map((item) => (
                  <span key={item} style={{ fontSize: "var(--text-sm)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", opacity: 0.85 }}>{item}</span>
                ))}
                <span style={{ padding: "var(--space-2) var(--space-6)", fontSize: "var(--text-xs)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", borderRadius: "var(--radius-md)", border: "2px solid rgba(255,255,255,0.5)", color: "var(--color-cream)" }}>Reserve</span>
              </div>
            </div>
          </header>
          <span style={{ color: "var(--color-cream)", fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", opacity: 0.6, zIndex: 1 }}>Hero Section Below</span>
        </div>
        {/* Scrolled state preview */}
        <header style={{ background: "var(--color-dark)", color: "var(--color-cream)", boxShadow: "var(--shadow-md)" }}>
          <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-8)", height: 72 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700 }}>Business Name</span>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
              {["Home", "Menu", "About", "Contact"].map((item) => (
                <span key={item} style={{ fontSize: "var(--text-sm)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", opacity: 0.85 }}>{item}</span>
              ))}
              <span style={{ padding: "var(--space-2) var(--space-6)", fontSize: "var(--text-xs)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", borderRadius: "var(--radius-md)", background: "var(--color-primary)", color: "var(--color-white)" }}>Reserve</span>
            </div>
          </div>
        </header>
        <div style={{ padding: "var(--space-4) var(--space-8)", fontSize: "var(--text-xs)", color: "var(--color-text-light)", textAlign: "center", background: "var(--color-cream)" }}>
          Top: transparent over hero &mdash; Bottom: solid after scroll
        </div>
      </div>
    </div>
  );
}
