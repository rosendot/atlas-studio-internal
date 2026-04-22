"use client";

/**
 * Landing — Restaurant (section preview).
 *
 * Composes existing kit preview components. Never redefines kit markup.
 * Content vars are forwarded as props; colors and fonts flow in via CSS
 * custom properties set by SectionDetail.tsx.
 */

import HeaderTransparent from "../kit-previews/HeaderTransparent";
import HeroVideo from "../kit-previews/HeroVideo";
import InfiniteCarousel from "../kit-previews/InfiniteCarousel";
import MenuList from "../kit-previews/MenuList";
import GridGallery from "../kit-previews/GridGallery";
import TestimonialCards from "../kit-previews/TestimonialCards";
import GoogleMapEmbed from "../kit-previews/GoogleMapEmbed";
import CtaBanner from "../kit-previews/CtaBanner";
import FooterMega from "../kit-previews/FooterMega";

export interface LandingRestaurantProps {
  restaurantName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryLabel: string;
  heroSecondaryLabel: string;
  favoritesTitle: string;
  favoritesSubtitle: string;
  menuTitle: string;
  menuSubtitle: string;
  galleryTitle: string;
  gallerySubtitle: string;
  testimonialsTitle: string;
  visitTitle: string;
  visitSubtitle: string;
  visitAddress: string;
  visitPhone: string;
  visitEmail: string;
  visitHours: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

export default function LandingRestaurant(
  props: Partial<LandingRestaurantProps>,
) {
  const v = {
    restaurantName: "Trattoria del Fuoco",
    heroEyebrow: "Wood-fired, family-run, since 1998",
    heroTitle: "A taste of old-world Italy, right in your neighborhood",
    heroBody:
      "Hand-rolled pasta, a wood-fired oven, and recipes passed down three generations. Walk-ins welcome, reservations encouraged.",
    heroPrimaryLabel: "Reserve a table",
    heroSecondaryLabel: "View the menu",
    favoritesTitle: "Fan favorites",
    favoritesSubtitle: "The dishes our regulars order every time",
    menuTitle: "A few highlights from the menu",
    menuSubtitle: "Seasonal, locally-sourced, made from scratch",
    galleryTitle: "Inside the restaurant",
    gallerySubtitle: "Warm light, open kitchen, room for family",
    testimonialsTitle: "What our guests say",
    visitTitle: "Come visit",
    visitSubtitle:
      "Walk-ins welcome. Reservations recommended on weekends.",
    visitAddress: "142 Pearl Street, Hoboken, NJ 07030",
    visitPhone: "(201) 555-0142",
    visitEmail: "reserve@trattoriadelfuoco.com",
    visitHours: "Tue–Sun 5pm–10pm · Closed Mon",
    ctaTitle: "Save your table tonight",
    ctaSubtitle:
      "Book online in under a minute, or call us directly.",
    ctaPrimaryLabel: "Reserve now",
    ctaSecondaryLabel: "Call (201) 555-0142",
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
      {/* Header (overlays hero in real theme — preview stacks it above) */}
      <HeaderTransparent />

      {/* Hero video */}
      <HeroVideo />

      {/* Fan favorites — cream band */}
      <div style={{ background: "var(--color-cream)" }}>
        <InfiniteCarousel />
        <div
          style={{
            textAlign: "center",
            paddingBottom: "var(--space-8)",
            fontSize: "var(--text-sm)",
            color: "var(--color-text-light)",
          }}
        >
          {v.favoritesTitle} — {v.favoritesSubtitle}
        </div>
      </div>

      {/* Menu teaser */}
      <MenuList
        sectionTitle={v.menuTitle}
        sectionSubtitle={v.menuSubtitle}
      />

      {/* Atmosphere gallery — dark band */}
      <div
        style={{
          background: "var(--color-dark)",
          color: "var(--color-white)",
        }}
      >
        <GridGallery
          sectionTitle={v.galleryTitle}
          sectionSubtitle={v.gallerySubtitle}
        />
      </div>

      {/* Guest reviews — cream band */}
      <div style={{ background: "var(--color-cream)" }}>
        <TestimonialCards sectionTitle={v.testimonialsTitle} />
      </div>

      {/* Visit / map / hours */}
      <GoogleMapEmbed
        address={v.visitAddress}
        phone={v.visitPhone}
        email={v.visitEmail}
        hours={v.visitHours}
      />

      {/* Final CTA */}
      <CtaBanner
        title={v.ctaTitle}
        subtitle={v.ctaSubtitle}
        primaryLabel={v.ctaPrimaryLabel}
        secondaryLabel={v.ctaSecondaryLabel}
      />

      {/* Footer */}
      <FooterMega />
    </div>
  );
}
