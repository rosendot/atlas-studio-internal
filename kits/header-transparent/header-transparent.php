<?php
/**
 * Header Transparent Template Partial
 *
 * Usage: Include in header.php or use get_template_part( 'header-transparent' );
 * Best used on pages with a hero section — the header overlays the hero.
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
?>
<header class="header-transparent">
	<div class="header-transparent__inner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-transparent__logo">
			<?php echo esc_html( $business_name ); ?>
		</a>

		<nav>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'header-transparent__nav',
				'depth'          => 1,
				'fallback_cb'    => false,
			) );
			?>
		</nav>

		<a href="<?php echo esc_url( get_theme_mod( 'header_cta_url', '/contact' ) ); ?>" class="header-transparent__cta">
			<?php echo esc_html( get_theme_mod( 'header_cta_label', 'Reserve a Table' ) ); ?>
		</a>

		<button class="header-transparent__hamburger" aria-label="<?php esc_attr_e( 'Menu', 'client-theme' ); ?>">
			<span></span><span></span><span></span>
		</button>
	</div>
</header>
