<?php
/**
 * Mobile Nav Drawer Template Partial
 *
 * Usage: Include in footer.php (or header.php) with get_template_part( 'mobile-nav-drawer' );
 * Trigger with a button that has data-drawer-open attribute.
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
?>
<div class="mobile-nav-drawer__backdrop"></div>
<nav class="mobile-nav-drawer mobile-nav-drawer--right" aria-label="<?php esc_attr_e( 'Mobile navigation', 'client-theme' ); ?>">
	<button class="mobile-nav-drawer__close" aria-label="<?php esc_attr_e( 'Close menu', 'client-theme' ); ?>">&times;</button>
	<div class="mobile-nav-drawer__brand"><?php echo esc_html( $business_name ); ?></div>

	<?php
	wp_nav_menu( array(
		'theme_location' => 'primary',
		'container'      => false,
		'menu_class'     => 'mobile-nav-drawer__nav',
		'depth'          => 1,
		'fallback_cb'    => false,
	) );
	?>

	<a href="<?php echo esc_url( get_theme_mod( 'header_cta_url', '/contact' ) ); ?>" class="mobile-nav-drawer__cta">
		<?php echo esc_html( get_theme_mod( 'header_cta_label', 'Contact Us' ) ); ?>
	</a>

	<div class="mobile-nav-drawer__social">
		<a href="#" class="mobile-nav-drawer__social-link" aria-label="<?php esc_attr_e( 'Facebook', 'client-theme' ); ?>">FB</a>
		<a href="#" class="mobile-nav-drawer__social-link" aria-label="<?php esc_attr_e( 'Instagram', 'client-theme' ); ?>">IG</a>
		<a href="#" class="mobile-nav-drawer__social-link" aria-label="<?php esc_attr_e( 'Yelp', 'client-theme' ); ?>">YP</a>
	</div>
</nav>
