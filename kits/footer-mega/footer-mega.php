<?php
/**
 * Footer Mega Template Partial
 *
 * Usage: Include in footer.php or use get_template_part( 'footer-mega' );
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
?>
<footer class="footer-mega">
	<div class="footer-mega__top">
		<!-- About -->
		<div>
			<div class="footer-mega__brand-name"><?php echo esc_html( $business_name ); ?></div>
			<p class="footer-mega__about"><?php echo esc_html( get_bloginfo( 'description' ) ); ?></p>
			<div class="footer-mega__social">
				<a href="#" class="footer-mega__social-link" aria-label="<?php esc_attr_e( 'Facebook', 'client-theme' ); ?>">FB</a>
				<a href="#" class="footer-mega__social-link" aria-label="<?php esc_attr_e( 'Instagram', 'client-theme' ); ?>">IG</a>
				<a href="#" class="footer-mega__social-link" aria-label="<?php esc_attr_e( 'Yelp', 'client-theme' ); ?>">YP</a>
			</div>
		</div>

		<!-- Services -->
		<div>
			<h3 class="footer-mega__heading"><?php esc_html_e( 'Services', 'client-theme' ); ?></h3>
			<ul class="footer-mega__links">
				<li><a href="#"><?php esc_html_e( 'Service One', 'client-theme' ); ?></a></li>
				<li><a href="#"><?php esc_html_e( 'Service Two', 'client-theme' ); ?></a></li>
				<li><a href="#"><?php esc_html_e( 'Service Three', 'client-theme' ); ?></a></li>
				<li><a href="#"><?php esc_html_e( 'Service Four', 'client-theme' ); ?></a></li>
			</ul>
		</div>

		<!-- Quick Links -->
		<div>
			<h3 class="footer-mega__heading"><?php esc_html_e( 'Quick Links', 'client-theme' ); ?></h3>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'footer',
				'container'      => false,
				'menu_class'     => 'footer-mega__links',
				'depth'          => 1,
				'fallback_cb'    => false,
			) );
			?>
		</div>

		<!-- Newsletter -->
		<div>
			<h3 class="footer-mega__heading"><?php esc_html_e( 'Newsletter', 'client-theme' ); ?></h3>
			<p class="footer-mega__newsletter-text"><?php esc_html_e( 'Get the latest updates and specials delivered to your inbox.', 'client-theme' ); ?></p>
			<form class="footer-mega__newsletter-form" action="#" method="post">
				<?php wp_nonce_field( 'newsletter_signup', 'newsletter_nonce' ); ?>
				<input type="email" class="footer-mega__newsletter-input" placeholder="<?php esc_attr_e( 'Your email', 'client-theme' ); ?>" required>
				<button type="submit" class="footer-mega__newsletter-btn"><?php esc_html_e( 'Subscribe', 'client-theme' ); ?></button>
			</form>
		</div>
	</div>

	<!-- Contact row -->
	<div class="footer-mega__contact">
		<div class="footer-mega__contact-item">
			<span class="footer-mega__contact-icon">&#9993;</span>
			<span><?php echo esc_html( get_theme_mod( 'business_email', 'hello@example.com' ) ); ?></span>
		</div>
		<div class="footer-mega__contact-item">
			<span class="footer-mega__contact-icon">&#9742;</span>
			<span><?php echo esc_html( get_theme_mod( 'business_phone', '(555) 123-4567' ) ); ?></span>
		</div>
		<div class="footer-mega__contact-item">
			<span class="footer-mega__contact-icon">&#9873;</span>
			<span><?php echo esc_html( get_theme_mod( 'business_address', '123 Main St, Your City' ) ); ?></span>
		</div>
	</div>

	<div class="footer-mega__bottom">
		<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php echo esc_html( $business_name ); ?>. <?php esc_html_e( 'All rights reserved.', 'client-theme' ); ?></span>
		<div class="footer-mega__bottom-links">
			<a href="#"><?php esc_html_e( 'Privacy Policy', 'client-theme' ); ?></a>
			<a href="#"><?php esc_html_e( 'Terms', 'client-theme' ); ?></a>
			<a href="#"><?php esc_html_e( 'Sitemap', 'client-theme' ); ?></a>
		</div>
	</div>
</footer>
