"use client";

export interface FooterMegaProps {
  sectionTitle: string;
}

const defaults: FooterMegaProps = {
  sectionTitle: "",
};

export default function FooterMega(props: Partial<FooterMegaProps>) {
  const v = { ...defaults, ...props };

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>
          Footer Mega
        </h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>
          Large multi-section footer with newsletter, services, and contact row
        </p>
      </div>

      {/* Footer preview */}
      <footer style={{ background: "var(--color-dark)", color: "var(--color-cream)", borderRadius: "var(--radius-lg)", overflow: "hidden", padding: "var(--space-16) var(--space-8) 0" }}>
        {/* Top grid */}
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "var(--space-12)", paddingBottom: "var(--space-12)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* About */}
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>Business Name</div>
            <p style={{ fontSize: "var(--text-sm)", lineHeight: "var(--leading-loose)", opacity: 0.7, marginBottom: "var(--space-6)" }}>A short description of your business, what you do, and why people should care.</p>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
              {["FB", "IG", "YP"].map((label) => (
                <span key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.1)", fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-cream)" }}>{label}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-5)", fontWeight: 600, color: "var(--color-secondary)" }}>Services</h3>
            {["Service One", "Service Two", "Service Three", "Service Four"].map((link) => (
              <div key={link} style={{ fontSize: "var(--text-sm)", opacity: 0.7, marginBottom: "var(--space-2)" }}>{link}</div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-5)", fontWeight: 600, color: "var(--color-secondary)" }}>Quick Links</h3>
            {["Home", "About", "Contact", "Blog"].map((link) => (
              <div key={link} style={{ fontSize: "var(--text-sm)", opacity: 0.7, marginBottom: "var(--space-2)" }}>{link}</div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-normal)", marginBottom: "var(--space-5)", fontWeight: 600, color: "var(--color-secondary)" }}>Newsletter</h3>
            <p style={{ fontSize: "var(--text-sm)", opacity: 0.7, lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>Get the latest updates and specials delivered to your inbox.</p>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              <div style={{ flex: 1, padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", fontSize: "var(--text-sm)", opacity: 0.4, color: "var(--color-cream)" }}>Your email</div>
              <span style={{ padding: "var(--space-2) var(--space-5)", borderRadius: "var(--radius-md)", background: "var(--color-primary)", color: "var(--color-white)", fontSize: "var(--text-xs)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)" }}>Subscribe</span>
            </div>
          </div>
        </div>

        {/* Contact row */}
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", justifyContent: "space-between", padding: "var(--space-8) 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {[["&#9993;", "hello@example.com"], ["&#9742;", "(555) 123-4567"], ["&#9873;", "123 Main St, Your City"]].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", fontSize: "var(--text-sm)", opacity: 0.7 }}>
              <span style={{ width: 36, height: 36, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--text-sm)", flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: icon }} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-6) 0", fontSize: "var(--text-xs)", opacity: 0.5 }}>
          <span>&copy; 2026 Business Name. All rights reserved.</span>
          <div style={{ display: "flex", gap: "var(--space-6)" }}>
            <span>Privacy Policy</span><span>Terms</span><span>Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
