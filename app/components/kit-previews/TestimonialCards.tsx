"use client";

export interface TestimonialCardsProps {
  columns: number;
  sectionTitle: string;
}

const defaults: TestimonialCardsProps = {
  columns: 3,
  sectionTitle: "What Our Clients Say",
};

const testimonials = [
  { quote: "Amazing service and incredible food. We come back every week.", name: "Sarah M.", role: "Regular Customer", stars: 5, initial: "S" },
  { quote: "The best dining experience in the city. Highly recommend the tasting menu.", name: "James R.", role: "Food Critic", stars: 5, initial: "J" },
  { quote: "Perfect for date night. The atmosphere is warm and the staff is wonderful.", name: "Emily T.", role: "Local Guide", stars: 5, initial: "E" },
];

export default function TestimonialCards(props: Partial<TestimonialCardsProps>) {
  const v = { ...defaults, ...props };
  const cols = typeof v.columns === "string" ? Number(v.columns) : v.columns;

  return (
    <div style={{ padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", fontWeight: 700, color: "var(--color-dark)", margin: "0 0 var(--space-2)", lineHeight: "var(--leading-snug)" }}>{v.sectionTitle}</h2>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-light)", margin: 0 }}>Client testimonials with star ratings</p>
      </div>
      <div style={{ maxWidth: "var(--max-w-xl)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "var(--space-6)" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)", background: "var(--color-white)", border: `1px solid var(--color-border)` }}>
              <div style={{ display: "flex", gap: 2, marginBottom: "var(--space-4)", fontSize: "var(--text-base)", color: "var(--color-secondary)" }}>
                {Array.from({ length: t.stars }).map((_, s) => <span key={s}>&#9733;</span>)}
              </div>
              <p style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-loose)", opacity: 0.85, marginBottom: "var(--space-6)", fontStyle: "italic", color: "var(--color-text)" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-full)", background: "var(--color-primary)", color: "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--text-sm)", fontWeight: 700, flexShrink: 0 }}>{t.initial}</div>
                <div>
                  <div style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-dark)" }}>{t.name}</div>
                  <div style={{ fontSize: "var(--text-xs)", opacity: 0.6, color: "var(--color-text-light)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
