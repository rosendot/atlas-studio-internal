"use client";

import { useState } from "react";

export interface MobileNavDrawerProps {
  drawerSide: string;
}

const defaults: MobileNavDrawerProps = {
  drawerSide: "right",
};

export default function MobileNavDrawer(props: Partial<MobileNavDrawerProps>) {
  const v = { ...defaults, ...props };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>Mobile Nav Drawer</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Off-canvas slide-in navigation &mdash; click hamburger to demo</p>
      </div>
      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative", minHeight: 400, background: "var(--color-cream)" }}>
        {/* Demo header */}
        <div style={{ background: "var(--color-dark)", color: "var(--color-cream)", padding: "0 var(--space-8)", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>Business Name</span>
          <button onClick={() => setIsOpen(true)} style={{ background: "none", border: "none", color: "var(--color-cream)", fontSize: "var(--text-2xl)", cursor: "pointer", lineHeight: 1 }}>&#9776;</button>
        </div>
        <div style={{ padding: "var(--space-8)", textAlign: "center", color: "var(--color-text-light)" }}>
          Click the hamburger icon to open the drawer
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div onClick={() => setIsOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 8 }} />
        )}

        {/* Drawer */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, width: 280,
          [v.drawerSide === "left" ? "left" : "right"]: 0,
          background: "var(--color-dark)", color: "var(--color-cream)", padding: "var(--space-8)",
          transform: isOpen ? "translateX(0)" : `translateX(${v.drawerSide === "left" ? "-100%" : "100%"})`,
          transition: "transform 0.3s ease", zIndex: 9,
        }}>
          <button onClick={() => setIsOpen(false)} style={{ position: "absolute", top: "var(--space-5)", right: "var(--space-5)", background: "none", border: "none", color: "var(--color-cream)", fontSize: "var(--text-2xl)", cursor: "pointer", lineHeight: 1 }}>&times;</button>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "var(--space-8)" }}>Business Name</div>
          {["Home", "Menu", "About", "Gallery", "Contact"].map((item) => (
            <div key={item} style={{ padding: "var(--space-3) 0", fontSize: "var(--text-base)", opacity: 0.8, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{item}</div>
          ))}
          <span style={{ display: "block", textAlign: "center", padding: "var(--space-3) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-tight)", borderRadius: "var(--radius-md)", background: "var(--color-primary)", color: "var(--color-white)", marginTop: "var(--space-8)" }}>Reserve a Table</span>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", marginTop: "var(--space-8)" }}>
            {["FB", "IG", "YP"].map((label) => (
              <span key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.1)", fontSize: "var(--text-xs)", fontWeight: 700 }}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
