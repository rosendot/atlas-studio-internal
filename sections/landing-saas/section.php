<?php
/**
 * Landing — SaaS
 *
 * Full landing page composition for a SaaS product.
 * Pulls each kit via get_template_part() — this file only controls page
 * flow and forwards content values into the keys each kit expects.
 *
 * Usage:
 *   <?php get_template_part( 'sections/landing-saas/section' ); ?>
 */

// Content values — colors/fonts come from the palette.
$product_name         = get_theme_mod( 'lsaas_product_name', 'Atlas' );
$hero_eyebrow         = get_theme_mod( 'lsaas_hero_eyebrow', 'New · v2.0 just launched' );
$hero_title           = get_theme_mod( 'lsaas_hero_title', 'Ship your next release without breaking the last one' );
$hero_body            = get_theme_mod( 'lsaas_hero_body', 'A release platform that catches regressions before they reach prod. Integrates with your existing stack in minutes, not weeks.' );
$hero_primary_label   = get_theme_mod( 'lsaas_hero_primary_label', 'Start free' );
$hero_secondary_label = get_theme_mod( 'lsaas_hero_secondary_label', 'Watch a demo' );

$logo_wall_title     = get_theme_mod( 'lsaas_logo_wall_title', 'Trusted by teams shipping at scale' );
$pillars_title       = get_theme_mod( 'lsaas_pillars_title', 'Everything your release pipeline needs' );
$pillars_subtitle    = get_theme_mod( 'lsaas_pillars_subtitle', 'Six capabilities, one platform, zero yak-shaving' );
$features_title      = get_theme_mod( 'lsaas_features_title', 'Built for the way shipping actually works' );
$features_subtitle   = get_theme_mod( 'lsaas_features_subtitle', 'Each capability, explained in detail' );
$stats_title         = get_theme_mod( 'lsaas_stats_title', 'The numbers teams see after switching' );
$testimonials_title  = get_theme_mod( 'lsaas_testimonials_title', 'What our customers are saying' );
$cta_title           = get_theme_mod( 'lsaas_cta_title', 'Start shipping with confidence' );
$cta_subtitle        = get_theme_mod( 'lsaas_cta_subtitle', 'Free for teams up to 10. No credit card required.' );
$cta_primary_label   = get_theme_mod( 'lsaas_cta_primary_label', 'Start free' );
$cta_secondary_label = get_theme_mod( 'lsaas_cta_secondary_label', 'Talk to sales' );

/*
 * Forward content vars into each kit's expected Customizer keys, so kits
 * stay standalone and this section stays declarative.
 */
set_theme_mod( 'hero_split_eyebrow',             $hero_eyebrow );
set_theme_mod( 'hero_split_title',               $hero_title );
set_theme_mod( 'hero_split_body',                $hero_body );
set_theme_mod( 'hero_split_primary_label',       $hero_primary_label );
set_theme_mod( 'hero_split_secondary_label',     $hero_secondary_label );

set_theme_mod( 'logo_wall_title',                $logo_wall_title );
set_theme_mod( 'feature_grid_title',             $pillars_title );
set_theme_mod( 'feature_grid_subtitle',          $pillars_subtitle );
set_theme_mod( 'feature_grid_columns',           3 );
set_theme_mod( 'feature_alternating_title',      $features_title );
set_theme_mod( 'feature_alternating_subtitle',   $features_subtitle );
set_theme_mod( 'stats_counter_title',            $stats_title );
set_theme_mod( 'testimonial_slider_title',       $testimonials_title );
set_theme_mod( 'cta_banner_title',               $cta_title );
set_theme_mod( 'cta_banner_subtitle',            $cta_subtitle );
set_theme_mod( 'cta_banner_primary_label',       $cta_primary_label );
set_theme_mod( 'cta_banner_secondary_label',     $cta_secondary_label );
?>

<main class="landing-saas">

	<?php
	// ─── Header (kit: header-classic) ───────────────────────────────────────
	get_template_part( 'kits/header-classic/header-classic' );
	?>

	<div class="landing-saas__flow">

		<?php
		// ─── Hero (kit: hero-split) ─────────────────────────────────────────
		get_template_part( 'kits/hero-split/hero-split' );
		?>

		<div class="landing-saas__trust">
			<?php
			// ─── Social proof (kit: logo-wall) ──────────────────────────────
			get_template_part( 'kits/logo-wall/logo-wall' );
			?>
		</div>

		<div class="landing-saas__pillars landing-saas__band--subtle">
			<?php
			// ─── Value-prop three-pillar (kit: feature-grid) ────────────────
			get_template_part( 'kits/feature-grid/feature-grid' );
			?>
		</div>

		<div class="landing-saas__features">
			<?php
			// ─── Feature deep-dive (kit: feature-alternating) ───────────────
			get_template_part( 'kits/feature-alternating/feature-alternating' );
			?>
		</div>

		<div class="landing-saas__stats landing-saas__band--dark">
			<?php
			// ─── Stats / social proof numbers (kit: stats-counter) ──────────
			get_template_part( 'kits/stats-counter/stats-counter' );
			?>
		</div>

		<div class="landing-saas__testimonials">
			<?php
			// ─── Testimonial slider (kit: testimonial-slider) ───────────────
			get_template_part( 'kits/testimonial-slider/testimonial-slider' );
			?>
		</div>

		<div class="landing-saas__cta landing-saas__band--subtle">
			<?php
			// ─── Final CTA (kit: cta-banner) ────────────────────────────────
			get_template_part( 'kits/cta-banner/cta-banner' );
			?>
		</div>

	</div>

	<?php
	// ─── Footer (kit: footer-minimal) ───────────────────────────────────────
	get_template_part( 'kits/footer-minimal/footer-minimal' );
	?>

</main>
