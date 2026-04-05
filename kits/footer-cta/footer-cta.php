<?php
/**
 * Footer CTA Template Partial
 *
 * Usage: Include in footer.php or use get_template_part( 'footer-cta' );
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
$cta_heading   = get_theme_mod( 'footer_cta_heading', 'Ready to Get Started?' );
$cta_text      = get_theme_mod( 'footer_cta_text', "Let's talk about your project." );
$cta_btn_label = get_theme_mod( 'footer_cta_btn', 'Contact Us' );
$cta_btn_url   = get_theme_mod( 'footer_cta_url', '/contact' );
?>
<footer>
	<!-- CTA banner -->
	<div class="footer-cta__banner">
		<h2 class="footer-cta__heading"><?php echo esc_html( $cta_heading ); ?></h2>
		<p class="footer-cta__text"><?php echo esc_html( $cta_text ); ?></p>
		<a href="<?php echo esc_url( $cta_btn_url ); ?>" class="footer-cta__btn"><?php echo esc_html( $cta_btn_label ); ?></a>
	</div>

	<!-- Footer columns -->
	<div class="footer-cta__footer">
		<div class="footer-cta__inner">
			<div>
				<div class="footer-cta__brand-name"><?php echo esc_html( $business_name ); ?></div>
				<p class="footer-cta__brand-desc"><?php echo esc_html( get_bloginfo( 'description' ) ); ?></p>
				<div class="footer-cta__social">
					<a href="#" class="footer-cta__social-link" aria-label="<?php esc_attr_e( 'Facebook', 'client-theme' ); ?>">FB</a>
					<a href="#" class="footer-cta__social-link" aria-label="<?php esc_attr_e( 'Instagram', 'client-theme' ); ?>">IG</a>
					<a href="#" class="footer-cta__social-link" aria-label="<?php esc_attr_e( 'Yelp', 'client-theme' ); ?>">YP</a>
				</div>
			</div>
			<div>
				<h3 class="footer-cta__col-heading"><?php esc_html_e( 'Quick Links', 'client-theme' ); ?></h3>
				<?php
				wp_nav_menu( array(
					'theme_location' => 'footer',
					'container'      => false,
					'menu_class'     => 'footer-cta__links',
					'depth'          => 1,
					'fallback_cb'    => false,
				) );
				?>
			</div>
			<div>
				<h3 class="footer-cta__col-heading"><?php esc_html_e( 'Services', 'client-theme' ); ?></h3>
				<ul class="footer-cta__links">
					<li><a href="#"><?php esc_html_e( 'Service One', 'client-theme' ); ?></a></li>
					<li><a href="#"><?php esc_html_e( 'Service Two', 'client-theme' ); ?></a></li>
					<li><a href="#"><?php esc_html_e( 'Service Three', 'client-theme' ); ?></a></li>
				</ul>
			</div>
			<div>
				<h3 class="footer-cta__col-heading"><?php esc_html_e( 'Contact', 'client-theme' ); ?></h3>
				<ul class="footer-cta__links">
					<li><a href="#"><?php echo esc_html( get_theme_mod( 'business_phone', '(555) 123-4567' ) ); ?></a></li>
					<li><a href="#"><?php echo esc_html( get_theme_mod( 'business_email', 'hello@example.com' ) ); ?></a></li>
					<li><a href="#"><?php echo esc_html( get_theme_mod( 'business_address', '123 Main St' ) ); ?></a></li>
				</ul>
			</div>
		</div>
		<div class="footer-cta__bottom">
			&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php echo esc_html( $business_name ); ?>. <?php esc_html_e( 'All rights reserved.', 'client-theme' ); ?>
		</div>
	</div>
</footer>
