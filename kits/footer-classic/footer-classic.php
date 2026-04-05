<?php
/**
 * Footer Classic Template Partial
 *
 * Usage: Include in footer.php or use get_template_part( 'footer-classic' );
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
?>
<footer class="footer-classic">
	<div class="footer-classic__inner">
		<!-- Brand -->
		<div>
			<div class="footer-classic__brand-name"><?php echo esc_html( $business_name ); ?></div>
			<p class="footer-classic__brand-desc"><?php echo esc_html( get_bloginfo( 'description' ) ); ?></p>
			<div class="footer-classic__social">
				<a href="#" class="footer-classic__social-link" aria-label="<?php esc_attr_e( 'Facebook', 'client-theme' ); ?>">FB</a>
				<a href="#" class="footer-classic__social-link" aria-label="<?php esc_attr_e( 'Instagram', 'client-theme' ); ?>">IG</a>
				<a href="#" class="footer-classic__social-link" aria-label="<?php esc_attr_e( 'Yelp', 'client-theme' ); ?>">YP</a>
			</div>
		</div>

		<!-- Quick Links -->
		<div>
			<h3 class="footer-classic__heading"><?php esc_html_e( 'Quick Links', 'client-theme' ); ?></h3>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'footer',
				'container'      => false,
				'menu_class'     => 'footer-classic__links',
				'depth'          => 1,
				'fallback_cb'    => false,
			) );
			?>
		</div>

		<!-- Contact -->
		<div>
			<h3 class="footer-classic__heading"><?php esc_html_e( 'Contact', 'client-theme' ); ?></h3>
			<p class="footer-classic__contact-item"><?php echo esc_html( get_theme_mod( 'business_address', '123 Main St' ) ); ?></p>
			<p class="footer-classic__contact-item"><?php echo esc_html( get_theme_mod( 'business_phone', '(555) 123-4567' ) ); ?></p>
			<p class="footer-classic__contact-item"><?php echo esc_html( get_theme_mod( 'business_email', 'hello@example.com' ) ); ?></p>
		</div>

		<!-- Hours -->
		<div>
			<h3 class="footer-classic__heading"><?php esc_html_e( 'Hours', 'client-theme' ); ?></h3>
			<div class="footer-classic__hours-row">
				<span><?php esc_html_e( 'Mon – Fri', 'client-theme' ); ?></span>
				<span>9am – 9pm</span>
			</div>
			<div class="footer-classic__hours-row">
				<span><?php esc_html_e( 'Saturday', 'client-theme' ); ?></span>
				<span>10am – 10pm</span>
			</div>
			<div class="footer-classic__hours-row">
				<span><?php esc_html_e( 'Sunday', 'client-theme' ); ?></span>
				<span>11am – 8pm</span>
			</div>
		</div>
	</div>

	<div class="footer-classic__bottom">
		<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php echo esc_html( $business_name ); ?>. <?php esc_html_e( 'All rights reserved.', 'client-theme' ); ?></span>
		<div class="footer-classic__bottom-links">
			<a href="#"><?php esc_html_e( 'Privacy Policy', 'client-theme' ); ?></a>
			<a href="#"><?php esc_html_e( 'Terms of Service', 'client-theme' ); ?></a>
		</div>
	</div>
</footer>
