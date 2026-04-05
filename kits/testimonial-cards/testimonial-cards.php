<?php
/**
 * Testimonial Cards Template Partial
 *
 * Usage: <?php get_template_part( 'testimonial-cards' ); ?>
 * Pulls testimonials from a custom post type or hardcoded array.
 */

$title   = get_theme_mod( 'testimonials_title', 'What Our Clients Say' );
$columns = get_theme_mod( 'testimonials_columns', 3 );

// Example: replace with WP_Query for a testimonials CPT
$testimonials = array(
	array( 'quote' => 'Amazing service and incredible food. We come back every week.', 'name' => 'Sarah M.', 'role' => 'Regular Customer', 'stars' => 5 ),
	array( 'quote' => 'The best dining experience in the city. Highly recommend the tasting menu.', 'name' => 'James R.', 'role' => 'Food Critic', 'stars' => 5 ),
	array( 'quote' => 'Perfect for date night. The atmosphere is warm and the staff is wonderful.', 'name' => 'Emily T.', 'role' => 'Local Guide', 'stars' => 5 ),
);
?>

<section class="testimonial-cards">
	<?php if ( $title ) : ?>
		<div class="testimonial-cards__header">
			<h2 class="testimonial-cards__title"><?php echo esc_html( $title ); ?></h2>
		</div>
	<?php endif; ?>

	<div class="testimonial-cards__grid" style="grid-template-columns: repeat(<?php echo esc_attr( $columns ); ?>, 1fr);">
		<?php foreach ( $testimonials as $t ) : ?>
			<div class="testimonial-cards__card">
				<div class="testimonial-cards__stars">
					<?php for ( $i = 0; $i < $t['stars']; $i++ ) : ?>
						<span>&#9733;</span>
					<?php endfor; ?>
				</div>
				<p class="testimonial-cards__quote">&ldquo;<?php echo esc_html( $t['quote'] ); ?>&rdquo;</p>
				<div class="testimonial-cards__author">
					<div class="testimonial-cards__avatar"><?php echo esc_html( substr( $t['name'], 0, 1 ) ); ?></div>
					<div>
						<div class="testimonial-cards__name"><?php echo esc_html( $t['name'] ); ?></div>
						<div class="testimonial-cards__role"><?php echo esc_html( $t['role'] ); ?></div>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
</section>
