<?php
/**
 * Stats Counter Template Partial
 *
 * Usage: <?php get_template_part( 'stats-counter' ); ?>
 */

$stats = array(
	array( 'target' => 500, 'suffix' => '+', 'label' => 'Happy Clients' ),
	array( 'target' => 15,  'suffix' => '',  'label' => 'Years Experience' ),
	array( 'target' => 50,  'suffix' => '+', 'label' => 'Team Members' ),
	array( 'target' => 98,  'suffix' => '%', 'label' => 'Satisfaction Rate' ),
);
?>

<section class="stats-counter">
	<div class="stats-counter__inner">
		<?php foreach ( $stats as $stat ) : ?>
			<div class="stats-counter__item">
				<div class="stats-counter__number" data-target="<?php echo esc_attr( $stat['target'] ); ?>" data-suffix="<?php echo esc_attr( $stat['suffix'] ); ?>">
					0<?php echo esc_html( $stat['suffix'] ); ?>
				</div>
				<div class="stats-counter__label"><?php echo esc_html( $stat['label'] ); ?></div>
			</div>
		<?php endforeach; ?>
	</div>
</section>
