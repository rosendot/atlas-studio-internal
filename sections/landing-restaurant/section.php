<?php
/**
 * Landing — Restaurant
 *
 * Full landing page composition for a restaurant. Every visual block is
 * pulled via get_template_part() — this file only forwards content values
 * and controls page-level rhythm.
 *
 * Usage:
 *   <?php get_template_part( 'sections/landing-restaurant/section' ); ?>
 */

// Content values — colors/fonts come from the palette.
$restaurant_name      = get_theme_mod( 'lrest_restaurant_name', 'Trattoria del Fuoco' );
$hero_eyebrow         = get_theme_mod( 'lrest_hero_eyebrow', 'Wood-fired, family-run, since 1998' );
$hero_title           = get_theme_mod( 'lrest_hero_title', 'A taste of old-world Italy, right in your neighborhood' );
$hero_body            = get_theme_mod( 'lrest_hero_body', 'Hand-rolled pasta, a wood-fired oven, and recipes passed down three generations. Walk-ins welcome, reservations encouraged.' );
$hero_primary_label   = get_theme_mod( 'lrest_hero_primary_label', 'Reserve a table' );
$hero_secondary_label = get_theme_mod( 'lrest_hero_secondary_label', 'View the menu' );

$favorites_title    = get_theme_mod( 'lrest_favorites_title', 'Fan favorites' );
$favorites_subtitle = get_theme_mod( 'lrest_favorites_subtitle', 'The dishes our regulars order every time' );
$menu_title         = get_theme_mod( 'lrest_menu_title', 'A few highlights from the menu' );
$menu_subtitle      = get_theme_mod( 'lrest_menu_subtitle', 'Seasonal, locally-sourced, made from scratch' );
$gallery_title      = get_theme_mod( 'lrest_gallery_title', 'Inside the restaurant' );
$gallery_subtitle   = get_theme_mod( 'lrest_gallery_subtitle', 'Warm light, open kitchen, room for family' );
$testimonials_title = get_theme_mod( 'lrest_testimonials_title', 'What our guests say' );
$visit_title        = get_theme_mod( 'lrest_visit_title', 'Come visit' );
$visit_subtitle     = get_theme_mod( 'lrest_visit_subtitle', 'Walk-ins welcome. Reservations recommended on weekends.' );
$visit_address      = get_theme_mod( 'lrest_visit_address', '142 Pearl Street, Hoboken, NJ 07030' );
$visit_phone        = get_theme_mod( 'lrest_visit_phone', '(201) 555-0142' );
$visit_email        = get_theme_mod( 'lrest_visit_email', 'reserve@trattoriadelfuoco.com' );
$visit_hours        = get_theme_mod( 'lrest_visit_hours', 'Tue–Sun 5pm–10pm · Closed Mon' );
$cta_title          = get_theme_mod( 'lrest_cta_title', 'Save your table tonight' );
$cta_subtitle       = get_theme_mod( 'lrest_cta_subtitle', 'Book online in under a minute, or call us directly.' );
$cta_primary_label  = get_theme_mod( 'lrest_cta_primary_label', 'Reserve now' );
$cta_secondary_label = get_theme_mod( 'lrest_cta_secondary_label', 'Call (201) 555-0142' );

/*
 * Forward content into each kit's expected Customizer keys.
 */
set_theme_mod( 'hero_video_eyebrow',            $hero_eyebrow );
set_theme_mod( 'hero_video_title',              $hero_title );
set_theme_mod( 'hero_video_body',               $hero_body );
set_theme_mod( 'hero_video_primary_label',      $hero_primary_label );
set_theme_mod( 'hero_video_secondary_label',    $hero_secondary_label );

set_theme_mod( 'infinite_carousel_title',       $favorites_title );
set_theme_mod( 'infinite_carousel_subtitle',    $favorites_subtitle );
set_theme_mod( 'menu_list_title',               $menu_title );
set_theme_mod( 'menu_list_subtitle',            $menu_subtitle );
set_theme_mod( 'grid_gallery_title',            $gallery_title );
set_theme_mod( 'grid_gallery_subtitle',         $gallery_subtitle );
set_theme_mod( 'testimonials_title',            $testimonials_title );

set_theme_mod( 'google_map_title',              $visit_title );
set_theme_mod( 'google_map_subtitle',           $visit_subtitle );
set_theme_mod( 'google_map_address',            $visit_address );
set_theme_mod( 'google_map_phone',              $visit_phone );
set_theme_mod( 'google_map_email',              $visit_email );
set_theme_mod( 'google_map_hours',              $visit_hours );

set_theme_mod( 'cta_banner_title',              $cta_title );
set_theme_mod( 'cta_banner_subtitle',           $cta_subtitle );
set_theme_mod( 'cta_banner_primary_label',      $cta_primary_label );
set_theme_mod( 'cta_banner_secondary_label',    $cta_secondary_label );
?>

<main class="landing-restaurant">

	<?php
	// ─── Header (kit: header-transparent — overlays the hero video) ─────────
	get_template_part( 'kits/header-transparent/header-transparent' );
	?>

	<div class="landing-restaurant__flow">

		<?php
		// ─── Hero (kit: hero-video) ─────────────────────────────────────────
		get_template_part( 'kits/hero-video/hero-video' );
		?>

		<div class="landing-restaurant__favorites landing-restaurant__band--cream">
			<?php
			// ─── Fan favorites carousel (kit: infinite-carousel) ────────────
			get_template_part( 'kits/infinite-carousel/infinite-carousel' );
			?>
		</div>

		<div class="landing-restaurant__menu">
			<?php
			// ─── Menu teaser (kit: menu-list) ───────────────────────────────
			get_template_part( 'kits/menu-list/menu-list' );
			?>
		</div>

		<div class="landing-restaurant__gallery landing-restaurant__band--dark">
			<?php
			// ─── Atmosphere gallery (kit: grid-gallery) ─────────────────────
			get_template_part( 'kits/grid-gallery/grid-gallery' );
			?>
		</div>

		<div class="landing-restaurant__testimonials landing-restaurant__band--cream">
			<?php
			// ─── Reviews (kit: testimonial-cards) ───────────────────────────
			get_template_part( 'kits/testimonial-cards/testimonial-cards' );
			?>
		</div>

		<div class="landing-restaurant__visit">
			<?php
			// ─── Map + hours + contact (kit: google-map-embed) ──────────────
			get_template_part( 'kits/google-map-embed/google-map-embed' );
			?>
		</div>

		<div class="landing-restaurant__cta">
			<?php
			// ─── Final CTA (kit: cta-banner) ────────────────────────────────
			get_template_part( 'kits/cta-banner/cta-banner' );
			?>
		</div>

	</div>

	<?php
	// ─── Footer (kit: footer-mega — full multi-column with hours + contact) ─
	get_template_part( 'kits/footer-mega/footer-mega' );
	?>

</main>
