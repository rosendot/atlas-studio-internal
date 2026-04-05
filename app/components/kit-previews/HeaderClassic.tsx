"use client";

export default function HeaderClassic() {
  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>Header Classic</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Logo left, navigation right, sticky on scroll</p>
      </div>
      <header style={{ background: "var(--color-dark)", color: "var(--color-cream)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-8)", height: 72 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700 }}>Business Name</span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
            {["Home", "Menu", "About", "Gallery", "Contact"].map((item) => (
              <span key={item} style={{ fontSize: "var(--text-sm)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", opacity: 0.8 }}>{item}</span>
            ))}
            <span style={{ padding: "var(--space-2) var(--space-6)", fontSize: "var(--text-xs)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", borderRadius: "var(--radius-md)", background: "var(--color-primary)", color: "var(--color-white)" }}>Reserve</span>
          </div>
        </div>
      </header>
    </div>
  );
}
