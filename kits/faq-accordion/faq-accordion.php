<?php
/**
 * FAQ Accordion Template Partial
 *
 * Usage: <?php get_template_part( 'faq-accordion' ); ?>
 *
 * Pass FAQ items via a custom field, hardcode them, or query a CPT.
 * The structure below shows hardcoded items as a starting point.
 */

$faqs = [
	[
		'question' => 'What are your hours?',
		'answer'   => 'We are open Monday through Friday from 11am to 10pm, and Saturday through Sunday from 10am to 11pm.',
	],
	[
		'question' => 'Do you take reservations?',
		'answer'   => 'Yes! You can call us directly or book online through our website. Walk-ins are always welcome.',
	],
	[
		'question' => 'Do you offer catering?',
		'answer'   => 'We offer catering for events of all sizes. Contact us for a custom menu and pricing.',
	],
	[
		'question' => 'Is there parking available?',
		'answer'   => 'Yes, we have a free parking lot behind the building with 30 spaces available.',
	],
];
?>

<div class="faq-accordion">
	<?php foreach ( $faqs as $index => $faq ) : ?>
		<div class="faq-accordion__item">
			<button
				class="faq-accordion__question"
				aria-expanded="false"
				aria-controls="faq-answer-<?php echo esc_attr( $index ); ?>"
			>
				<?php echo esc_html( $faq['question'] ); ?>
				<span class="faq-accordion__icon" aria-hidden="true"></span>
			</button>
			<div
				class="faq-accordion__answer"
				id="faq-answer-<?php echo esc_attr( $index ); ?>"
				role="region"
			>
				<div class="faq-accordion__answer-inner">
					<?php echo esc_html( $faq['answer'] ); ?>
				</div>
			</div>
		</div>
	<?php endforeach; ?>
</div>
