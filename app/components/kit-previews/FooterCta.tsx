"use client";

export interface FooterCtaProps {
  ctaHeading: string;
  ctaText: string;
  ctaButtonLabel: string;
}

const defaults: FooterCtaProps = {
  ctaHeading: "Ready to Get Started?",
  ctaText: "Let's talk about your project. We'd love to hear from you.",
  ctaButtonLabel: "Contact Us",
};

export default function FooterCta(props: Partial<FooterCtaProps>) {
  const v = { ...defaults, ...props };

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>
          Footer CTA
        </h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>
          Call-to-action banner above a standard footer
        </p>
      </div>

      {/* Footer preview */}
      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        {/* CTA banner */}
        <div style={{ background: "var(--color-primary)", color: "var(--color-white)", textAlign: "center", padding: "var(--space-16) var(--space-8)" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, marginBottom: "var(--space-4)", lineHeight: "var(--leading-snug)" }}>
            {v.ctaHeading}
          </h2>
          <p style={{ fontSize: "var(--text-xl)", opacity: 0.8, marginBottom: "var(--space-8)", maxWidth: 500, marginLeft: "auto", marginRight: "auto", lineHeight: "var(--leading-relaxed)" }}>
            {v.ctaText}
          </p>
          <span style={{ display: "inline-block", padding: "var(--space-4) var(--space-10)", fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", borderRadius: "var(--radius-md)", background: "var(--color-white)", color: "var(--color-primary)" }}>
            {v.ctaButtonLabel}
          </span>
        </div>

        {/* Footer columns */}
        <div style={{ background: "var(--color-dark)", color: "var(--color-cream)", padding: "var(--space-12) var(--space-8) 0" }}>
          <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "var(--space-12)", paddingBottom: "var(--space-10)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {/* Brand */}
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-3)" }}>Business Name</div>
              <p style={{ fontSize: "var(--text-sm)", opacity: 0.6, lineHeight: "var(--leading-loose)", marginBottom: "var(--space-5)" }}>A short description of your business and what makes it special.</p>
              <div style={{ display: "flex", gap: "var(--space-3)" }}>
                {["FB", "IG", "YP"].map((label) => (
                  <span key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.1)", fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-cream)" }}>{label}</span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-4)", fontWeight: 600, color: "var(--color-secondary)" }}>Quick Links</h3>
              {["Home", "About", "Menu", "Contact"].map((link) => (
                <div key={link} style={{ fontSize: "var(--text-sm)", opacity: 0.6, marginBottom: "var(--space-2)" }}>{link}</div>
              ))}
            </div>

            {/* Services */}
            <div>
              <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-4)", fontWeight: 600, color: "var(--color-secondary)" }}>Services</h3>
              {["Service One", "Service Two", "Service Three"].map((link) => (
                <div key={link} style={{ fontSize: "var(--text-sm)", opacity: 0.6, marginBottom: "var(--space-2)" }}>{link}</div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-4)", fontWeight: 600, color: "var(--color-secondary)" }}>Contact</h3>
              {["(555) 123-4567", "hello@example.com", "123 Main St"].map((info) => (
                <div key={info} style={{ fontSize: "var(--text-sm)", opacity: 0.6, marginBottom: "var(--space-2)" }}>{info}</div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", padding: "var(--space-5) 0", fontSize: "var(--text-xs)", opacity: 0.4, textAlign: "center" }}>
            &copy; 2026 Business Name. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
