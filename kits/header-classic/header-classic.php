<?php
/**
 * Header Classic Template Partial
 *
 * Usage: Include in header.php or use get_template_part( 'header-classic' );
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
?>
<header class="header-classic">
	<div class="header-classic__inner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-classic__logo">
			<?php echo esc_html( $business_name ); ?>
		</a>

		<nav>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'header-classic__nav',
				'depth'          => 1,
				'fallback_cb'    => false,
			) );
			?>
		</nav>

		<a href="<?php echo esc_url( get_theme_mod( 'header_cta_url', '/contact' ) ); ?>" class="header-classic__cta">
			<?php echo esc_html( get_theme_mod( 'header_cta_label', 'Contact Us' ) ); ?>
		</a>

		<button class="header-classic__hamburger" aria-label="<?php esc_attr_e( 'Menu', 'client-theme' ); ?>">
			<span></span><span></span><span></span>
		</button>
	</div>
</header>
