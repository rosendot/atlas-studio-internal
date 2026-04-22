<?php
/**
 * Landing — Service Business
 *
 * Full landing page composition. Pulls in each kit via get_template_part()
 * so styling/behavior stays in the kit; this file only controls page flow
 * and sets Customizer values that the kits read.
 *
 * Usage:
 *   <?php get_template_part( 'sections/landing-service-business/section' ); ?>
 *
 * Setup:
 *   - Copy each kit folder into your theme (or enqueue its CSS/JS in functions.php)
 *   - Ensure every kit's PHP partial is reachable by get_template_part()
 *   - This section only adds layout CSS (section.css) — kits bring their own styles
 */

// Content values — override via the Customizer. No colors or fonts here;
// those live in the active palette (CSS custom properties).
$business_name        = get_theme_mod( 'lsb_business_name', 'Atlas Studio' );
$hero_eyebrow         = get_theme_mod( 'lsb_hero_eyebrow', 'Websites for service businesses' );
$hero_title           = get_theme_mod( 'lsb_hero_title', 'You run the business. We hold up your site.' );
$hero_body            = get_theme_mod( 'lsb_hero_body', 'Custom WordPress sites built on Bedrock, monitored daily, and maintained monthly — so your site stays fast, secure, and on-brand without you thinking about it.' );
$hero_primary_label   = get_theme_mod( 'lsb_hero_primary_label', 'Start a project' );
$hero_secondary_label = get_theme_mod( 'lsb_hero_secondary_label', 'See our work' );

$logo_wall_title     = get_theme_mod( 'lsb_logo_wall_title', 'Trusted by small businesses across the region' );
$services_title      = get_theme_mod( 'lsb_services_title', 'What we do' );
$services_subtitle   = get_theme_mod( 'lsb_services_subtitle', 'Pick a service, or let us build you a full package' );
$process_title       = get_theme_mod( 'lsb_process_title', 'How it works' );
$process_subtitle    = get_theme_mod( 'lsb_process_subtitle', 'From kickoff to live site in four simple steps' );
$testimonials_title  = get_theme_mod( 'lsb_testimonials_title', 'What our clients say' );
$faq_title           = get_theme_mod( 'lsb_faq_title', 'Common questions' );
$cta_title           = get_theme_mod( 'lsb_cta_title', 'Ready to ship faster?' );
$cta_subtitle        = get_theme_mod( 'lsb_cta_subtitle', 'Get a custom site built by people who actually maintain it afterward.' );
$cta_primary_label   = get_theme_mod( 'lsb_cta_primary_label', 'Start a project' );
$cta_secondary_label = get_theme_mod( 'lsb_cta_secondary_label', 'Book a call' );

/*
 * Each kit reads its own Customizer keys. We forward this section's content
 * variables into the keys each kit expects, so the kits stay standalone and
 * this section stays declarative.
 */
set_theme_mod( 'hero_split_eyebrow',          $hero_eyebrow );
set_theme_mod( 'hero_split_title',            $hero_title );
set_theme_mod( 'hero_split_body',             $hero_body );
set_theme_mod( 'hero_split_primary_label',    $hero_primary_label );
set_theme_mod( 'hero_split_secondary_label',  $hero_secondary_label );

set_theme_mod( 'logo_wall_title',             $logo_wall_title );
set_theme_mod( 'service_cards_title',         $services_title );
set_theme_mod( 'service_cards_subtitle',      $services_subtitle );
set_theme_mod( 'process_steps_title',         $process_title );
set_theme_mod( 'process_steps_subtitle',      $process_subtitle );
set_theme_mod( 'testimonials_title',          $testimonials_title );
set_theme_mod( 'faq_accordion_title',         $faq_title );
set_theme_mod( 'cta_banner_title',            $cta_title );
set_theme_mod( 'cta_banner_subtitle',         $cta_subtitle );
set_theme_mod( 'cta_banner_primary_label',    $cta_primary_label );
set_theme_mod( 'cta_banner_secondary_label',  $cta_secondary_label );
?>

<main class="landing-service-business">

	<?php
	// ─── Header (kit: header-classic) ───────────────────────────────────────
	get_template_part( 'kits/header-classic/header-classic' );
	?>

	<div class="landing-service-business__flow">

		<?php
		// ─── Hero (kit: hero-split) ─────────────────────────────────────────
		get_template_part( 'kits/hero-split/hero-split' );
		?>

		<div class="landing-service-business__trust landing-service-business__band--cream">
			<?php
			// ─── Social proof (kit: logo-wall) ──────────────────────────────
			get_template_part( 'kits/logo-wall/logo-wall' );
			?>
		</div>

		<div class="landing-service-business__services">
			<?php
			// ─── Services (kit: service-cards) ──────────────────────────────
			get_template_part( 'kits/service-cards/service-cards' );
			?>
		</div>

		<div class="landing-service-business__process landing-service-business__band--cream">
			<?php
			// ─── Process (kit: process-steps) ───────────────────────────────
			get_template_part( 'kits/process-steps/process-steps' );
			?>
		</div>

		<div class="landing-service-business__testimonials">
			<?php
			// ─── Testimonials (kit: testimonial-cards) ──────────────────────
			get_template_part( 'kits/testimonial-cards/testimonial-cards' );
			?>
		</div>

		<div class="landing-service-business__faq landing-service-business__band--cream">
			<?php
			// ─── FAQ (kit: faq-accordion) ───────────────────────────────────
			get_template_part( 'kits/faq-accordion/faq-accordion' );
			?>
		</div>

		<div class="landing-service-business__cta">
			<?php
			// ─── Final CTA (kit: cta-banner) ────────────────────────────────
			get_template_part( 'kits/cta-banner/cta-banner' );
			?>
		</div>

	</div>

	<?php
	// ─── Footer (kit: footer-classic) ───────────────────────────────────────
	get_template_part( 'kits/footer-classic/footer-classic' );
	?>

</main>
