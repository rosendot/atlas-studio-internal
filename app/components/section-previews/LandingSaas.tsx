"use client";

/**
 * Landing — SaaS (section preview).
 *
 * Composes existing kit preview components. Does NOT redefine any markup
 * already owned by a kit. Content vars are forwarded as props; colors and
 * fonts flow in via CSS custom properties set by SectionDetail.tsx.
 */

import HeaderClassic from "../kit-previews/HeaderClassic";
import HeroSplit from "../kit-previews/HeroSplit";
import LogoWall from "../kit-previews/LogoWall";
import FeatureGrid from "../kit-previews/FeatureGrid";
import FeatureAlternating from "../kit-previews/FeatureAlternating";
import StatsCounter from "../kit-previews/StatsCounter";
import TestimonialSlider from "../kit-previews/TestimonialSlider";
import CtaBanner from "../kit-previews/CtaBanner";
import FooterMinimal from "../kit-previews/FooterMinimal";

export interface LandingSaasProps {
  productName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryLabel: string;
  heroSecondaryLabel: string;
  logoWallTitle: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  featuresTitle: string;
  featuresSubtitle: string;
  statsTitle: string;
  testimonialsTitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

export default function LandingSaas(props: Partial<LandingSaasProps>) {
  const v = {
    productName: "Atlas",
    heroEyebrow: "New · v2.0 just launched",
    heroTitle: "Ship your next release without breaking the last one",
    heroBody:
      "A release platform that catches regressions before they reach prod. Integrates with your existing stack in minutes, not weeks.",
    heroPrimaryLabel: "Start free",
    heroSecondaryLabel: "Watch a demo",
    logoWallTitle: "Trusted by teams shipping at scale",
    pillarsTitle: "Everything your release pipeline needs",
    pillarsSubtitle: "Six capabilities, one platform, zero yak-shaving",
    featuresTitle: "Built for the way shipping actually works",
    featuresSubtitle: "Each capability, explained in detail",
    statsTitle: "The numbers teams see after switching",
    testimonialsTitle: "What our customers are saying",
    ctaTitle: "Start shipping with confidence",
    ctaSubtitle: "Free for teams up to 10. No credit card required.",
    ctaPrimaryLabel: "Start free",
    ctaSecondaryLabel: "Talk to sales",
    ...props,
  };

  return (
    <div
      style={{
        background: "var(--color-white)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Header */}
      <HeaderClassic />

      {/* Hero */}
      <HeroSplit />

      {/* Social proof */}
      <LogoWall sectionTitle={v.logoWallTitle} />

      {/* Three-pillar value prop — subtle band */}
      <div style={{ background: "var(--color-cream)" }}>
        <FeatureGrid
          sectionTitle={v.pillarsTitle}
          sectionSubtitle={v.pillarsSubtitle}
          columns={3}
        />
      </div>

      {/* Feature deep-dive */}
      <FeatureAlternating
        sectionTitle={v.featuresTitle}
        sectionSubtitle={v.featuresSubtitle}
      />

      {/* Stats — dark band (inverted foreground/background) */}
      <div
        style={{
          background: "var(--color-dark)",
          color: "var(--color-white)",
        }}
      >
        <StatsCounter />
      </div>

      {/* Testimonial slider */}
      <TestimonialSlider sectionTitle={v.testimonialsTitle} />

      {/* Final CTA — subtle band */}
      <div style={{ background: "var(--color-cream)" }}>
        <CtaBanner
          title={v.ctaTitle}
          subtitle={v.ctaSubtitle}
          primaryLabel={v.ctaPrimaryLabel}
          secondaryLabel={v.ctaSecondaryLabel}
        />
      </div>

      {/* Footer */}
      <FooterMinimal />
    </div>
  );
}
