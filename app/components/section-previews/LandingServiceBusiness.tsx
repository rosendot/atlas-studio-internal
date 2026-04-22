"use client";

/**
 * Landing — Service Business (section preview).
 *
 * Composes existing kit preview components — does NOT redefine any markup
 * already owned by a kit. Add variables for content, but never for colors
 * or fonts (those come from the palette via CSS custom properties, set on
 * the wrapper by SectionDetail.tsx).
 */

import HeaderClassic from "../kit-previews/HeaderClassic";
import HeroSplit from "../kit-previews/HeroSplit";
import LogoWall from "../kit-previews/LogoWall";
import ServiceCards from "../kit-previews/ServiceCards";
import ProcessSteps from "../kit-previews/ProcessSteps";
import TestimonialCards from "../kit-previews/TestimonialCards";
import FaqAccordion from "../kit-previews/FaqAccordion";
import CtaBanner from "../kit-previews/CtaBanner";
import FooterClassic from "../kit-previews/FooterClassic";

export interface LandingServiceBusinessProps {
  businessName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryLabel: string;
  heroSecondaryLabel: string;
  logoWallTitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  processTitle: string;
  processSubtitle: string;
  testimonialsTitle: string;
  faqTitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

export default function LandingServiceBusiness(
  props: Partial<LandingServiceBusinessProps>,
) {
  const v = {
    businessName: "Atlas Studio",
    heroEyebrow: "Websites for service businesses",
    heroTitle: "You run the business. We hold up your site.",
    heroBody:
      "Custom WordPress sites built on Bedrock, monitored daily, and maintained monthly — so your site stays fast, secure, and on-brand without you thinking about it.",
    heroPrimaryLabel: "Start a project",
    heroSecondaryLabel: "See our work",
    logoWallTitle: "Trusted by small businesses across the region",
    servicesTitle: "What we do",
    servicesSubtitle: "Pick a service, or let us build you a full package",
    processTitle: "How it works",
    processSubtitle: "From kickoff to live site in four simple steps",
    testimonialsTitle: "What our clients say",
    faqTitle: "Common questions",
    ctaTitle: "Ready to ship faster?",
    ctaSubtitle:
      "Get a custom site built by people who actually maintain it afterward.",
    ctaPrimaryLabel: "Start a project",
    ctaSecondaryLabel: "Book a call",
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

      {/* Social proof — alternating cream band */}
      <div style={{ background: "var(--color-cream)" }}>
        <LogoWall sectionTitle={v.logoWallTitle} />
      </div>

      {/* Services */}
      <ServiceCards
        sectionTitle={v.servicesTitle}
        sectionSubtitle={v.servicesSubtitle}
      />

      {/* Process — cream band */}
      <div style={{ background: "var(--color-cream)" }}>
        <ProcessSteps
          sectionTitle={v.processTitle}
          sectionSubtitle={v.processSubtitle}
        />
      </div>

      {/* Testimonials */}
      <TestimonialCards sectionTitle={v.testimonialsTitle} />

      {/* FAQ — cream band */}
      <div style={{ background: "var(--color-cream)" }}>
        <FaqAccordion />
        <div
          style={{
            textAlign: "center",
            paddingBottom: "var(--space-12)",
            fontSize: "var(--text-sm)",
            color: "var(--color-text-light)",
          }}
        >
          {v.faqTitle}
        </div>
      </div>

      {/* Final CTA */}
      <CtaBanner
        title={v.ctaTitle}
        subtitle={v.ctaSubtitle}
        primaryLabel={v.ctaPrimaryLabel}
        secondaryLabel={v.ctaSecondaryLabel}
      />

      {/* Footer */}
      <FooterClassic />
    </div>
  );
}
