"use client";

export interface BreadcrumbsProps {
  separator: string;
}

const defaults: BreadcrumbsProps = {
  separator: "›",
};

const crumbs = [
  { label: "Home", isCurrent: false },
  { label: "Menu", isCurrent: false },
  { label: "Appetizers", isCurrent: false },
  { label: "Bruschetta", isCurrent: true },
];

export default function Breadcrumbs(props: Partial<BreadcrumbsProps>) {
  const v = { ...defaults, ...props };

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>Breadcrumbs</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Hierarchical navigation trail with SEO schema markup</p>
      </div>
      <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
        {/* Simulated header */}
        <div style={{ background: "var(--color-dark)", color: "var(--color-cream)", padding: "var(--space-4) var(--space-8)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>Business Name</div>
        {/* Breadcrumbs */}
        <div style={{ background: "var(--color-white)", borderBottom: `1px solid var(--color-border)`, padding: "var(--space-3) var(--space-8)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-xs)" }}>
            {crumbs.map((crumb, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                {crumb.isCurrent ? (
                  <span style={{ opacity: 0.9, fontWeight: 500, color: "var(--color-dark)" }}>{crumb.label}</span>
                ) : (
                  <>
                    <span style={{ opacity: 0.6, color: "var(--color-text)" }}>{crumb.label}</span>
                    <span style={{ opacity: 0.35, color: "var(--color-text)" }}>{v.separator}</span>
                  </>
                )}
              </span>
            ))}
          </div>
        </div>
        {/* Page content */}
        <div style={{ background: "var(--color-cream)", padding: "var(--space-8)", color: "var(--color-text-light)", fontSize: "var(--text-sm)" }}>
          Page content below breadcrumbs...
        </div>
      </div>
    </div>
  );
}
