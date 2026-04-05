<?php
/**
 * Footer Minimal Template Partial
 *
 * Usage: Include in footer.php or use get_template_part( 'footer-minimal' );
 */

$business_name = get_theme_mod( 'business_name', get_bloginfo( 'name' ) );
?>
<footer class="footer-minimal">
	<div class="footer-minimal__inner">
		<div class="footer-minimal__brand"><?php echo esc_html( $business_name ); ?></div>
		<span class="footer-minimal__copy">&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php echo esc_html( $business_name ); ?>. <?php esc_html_e( 'All rights reserved.', 'client-theme' ); ?></span>
		<div class="footer-minimal__social">
			<a href="#" class="footer-minimal__social-link" aria-label="<?php esc_attr_e( 'Facebook', 'client-theme' ); ?>">FB</a>
			<a href="#" class="footer-minimal__social-link" aria-label="<?php esc_attr_e( 'Instagram', 'client-theme' ); ?>">IG</a>
			<a href="#" class="footer-minimal__social-link" aria-label="<?php esc_attr_e( 'Yelp', 'client-theme' ); ?>">YP</a>
		</div>
	</div>
</footer>
