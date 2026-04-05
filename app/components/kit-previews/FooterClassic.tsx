"use client";

export interface FooterClassicProps {
  columns: number;
  sectionTitle: string;
}

const defaults: FooterClassicProps = {
  columns: 4,
  sectionTitle: "",
};

export default function FooterClassic(props: Partial<FooterClassicProps>) {
  const v = { ...defaults, ...props };

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>
          Footer Classic
        </h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>
          Multi-column footer with logo, links, contact, and hours
        </p>
      </div>

      {/* Footer preview */}
      <footer style={{ background: "var(--color-dark)", color: "var(--color-cream)", borderRadius: "var(--radius-lg)", overflow: "hidden", padding: "var(--space-16) var(--space-8) 0" }}>
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-12)", paddingBottom: "var(--space-12)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>Business Name</div>
            <p style={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-loose)", opacity: 0.7, marginBottom: "var(--space-6)" }}>A short description of your business and what makes it special.</p>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
              {["FB", "IG", "YP"].map((label) => (
                <span key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.1)", fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-cream)" }}>{label}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-5)", fontWeight: 600, color: "var(--color-secondary)" }}>Quick Links</h3>
            {["Home", "Menu", "About", "Contact", "Reservations"].map((link) => (
              <div key={link} style={{ fontSize: "var(--text-sm)", opacity: 0.7, marginBottom: "var(--space-2)" }}>{link}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-5)", fontWeight: 600, color: "var(--color-secondary)" }}>Contact</h3>
            <p style={{ fontSize: "var(--text-sm)", opacity: 0.7, marginBottom: "var(--space-2)", lineHeight: "var(--leading-relaxed)" }}>123 Main Street<br />Your City, ST 12345</p>
            <p style={{ fontSize: "var(--text-sm)", opacity: 0.7, marginBottom: "var(--space-2)" }}>(555) 123-4567</p>
            <p style={{ fontSize: "var(--text-sm)", opacity: 0.7 }}>hello@example.com</p>
          </div>

          {/* Hours */}
          <div>
            <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-5)", fontWeight: 600, color: "var(--color-secondary)" }}>Hours</h3>
            {[["Mon – Fri", "9am – 9pm"], ["Saturday", "10am – 10pm"], ["Sunday", "11am – 8pm"]].map(([day, time]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-sm)", opacity: 0.7, marginBottom: "var(--space-2)" }}>
                <span>{day}</span><span>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-6) 0", fontSize: "var(--text-xs)", opacity: 0.5 }}>
          <span>&copy; 2026 Business Name. All rights reserved.</span>
          <div style={{ display: "flex", gap: "var(--space-6)" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
