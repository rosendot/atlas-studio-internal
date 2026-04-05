<?php
/**
 * Logo Wall Template Partial
 *
 * Usage: <?php get_template_part( 'logo-wall' ); ?>
 */

$title   = get_theme_mod( 'logo_wall_title', 'Trusted By' );
$columns = get_theme_mod( 'logo_wall_columns', 5 );

// Replace with ACF gallery field or custom query
$logos = array(); // Array of image IDs or URLs
?>

<section class="logo-wall">
	<?php if ( $title ) : ?>
		<div class="logo-wall__header">
			<h2 class="logo-wall__title"><?php echo esc_html( $title ); ?></h2>
		</div>
	<?php endif; ?>

	<div class="logo-wall__grid" style="grid-template-columns: repeat(<?php echo esc_attr( $columns ); ?>, 1fr);">
		<?php foreach ( $logos as $logo_id ) : ?>
			<div class="logo-wall__item">
				<?php echo wp_get_attachment_image( $logo_id, 'medium', false, array( 'loading' => 'lazy' ) ); ?>
			</div>
		<?php endforeach; ?>
	</div>
</section>
