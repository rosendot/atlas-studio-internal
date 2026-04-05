<?php
/**
 * Testimonial Slider Template Partial
 *
 * Usage: <?php get_template_part( 'testimonial-slider' ); ?>
 */

$title    = get_theme_mod( 'testimonials_title', 'What Our Clients Say' );
$interval = get_theme_mod( 'testimonials_interval', 6000 );

$testimonials = array(
	array( 'quote' => 'Amazing service and incredible food. We come back every week.', 'name' => 'Sarah M.', 'role' => 'Regular Customer', 'stars' => 5 ),
	array( 'quote' => 'The best dining experience in the city. Highly recommend the tasting menu.', 'name' => 'James R.', 'role' => 'Food Critic', 'stars' => 5 ),
	array( 'quote' => 'Perfect for date night. The atmosphere is warm and the staff is wonderful.', 'name' => 'Emily T.', 'role' => 'Local Guide', 'stars' => 5 ),
);
?>

<section class="testimonial-slider" data-interval="<?php echo esc_attr( $interval ); ?>">
	<?php if ( $title ) : ?>
		<div class="testimonial-slider__header">
			<h2 class="testimonial-slider__title"><?php echo esc_html( $title ); ?></h2>
		</div>
	<?php endif; ?>

	<div class="testimonial-slider__viewport">
		<?php foreach ( $testimonials as $i => $t ) : ?>
			<div class="testimonial-slider__slide<?php echo 0 === $i ? ' is-active' : ''; ?>">
				<div class="testimonial-slider__stars">
					<?php for ( $s = 0; $s < $t['stars']; $s++ ) : ?>
						<span>&#9733;</span>
					<?php endfor; ?>
				</div>
				<div class="testimonial-slider__quote-mark">&ldquo;</div>
				<p class="testimonial-slider__quote"><?php echo esc_html( $t['quote'] ); ?></p>
				<div class="testimonial-slider__name"><?php echo esc_html( $t['name'] ); ?></div>
				<div class="testimonial-slider__role"><?php echo esc_html( $t['role'] ); ?></div>
			</div>
		<?php endforeach; ?>
	</div>

	<?php if ( count( $testimonials ) > 1 ) : ?>
		<div class="testimonial-slider__dots">
			<?php for ( $i = 0; $i < count( $testimonials ); $i++ ) : ?>
				<button class="testimonial-slider__dot<?php echo 0 === $i ? ' is-active' : ''; ?>" aria-label="<?php echo esc_attr( sprintf( __( 'Testimonial %d', 'client-theme' ), $i + 1 ) ); ?>"></button>
			<?php endfor; ?>
		</div>
	<?php endif; ?>
</section>
