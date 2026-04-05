<?php
/**
 * Hero Slideshow Template Partial
 *
 * Usage: <?php get_template_part( 'hero-slideshow' ); ?>
 *
 * Set slide images via ACF repeater, custom fields, or hardcode below.
 * Include hero-slideshow.js after hero-slideshow.css.
 */

// Example: pull slide images from an ACF repeater or hardcode an array
$slides = array(
	get_theme_mod( 'hero_slide_1', '' ),
	get_theme_mod( 'hero_slide_2', '' ),
	get_theme_mod( 'hero_slide_3', '' ),
);
$slides = array_filter( $slides ); // Remove empty values
?>
<section class="hero-slideshow" data-interval="5000">
    <div class="hero-slideshow__slides">
        <?php foreach ( $slides as $i => $image_url ) : ?>
            <div
                class="hero-slideshow__slide<?php echo 0 === $i ? ' is-active' : ''; ?>"
                style="background-image: url('<?php echo esc_url( $image_url ); ?>');"
            ></div>
        <?php endforeach; ?>
    </div>
    <div class="hero-slideshow__overlay"></div>
    <div class="hero-slideshow__content">
        <p class="hero-slideshow__label"><?php echo esc_html__( 'Welcome to', 'client-theme' ); ?></p>
        <h1 class="hero-slideshow__title"><?php bloginfo( 'name' ); ?></h1>
        <p class="hero-slideshow__text"><?php bloginfo( 'description' ); ?></p>
        <div class="hero-slideshow__buttons">
            <a href="/menu" class="btn btn--primary"><?php echo esc_html__( 'View Menu', 'client-theme' ); ?></a>
            <a href="/about" class="btn btn--outline"><?php echo esc_html__( 'Our Story', 'client-theme' ); ?></a>
        </div>
    </div>
    <?php if ( count( $slides ) > 1 ) : ?>
        <div class="hero-slideshow__indicators">
            <?php for ( $i = 0; $i < count( $slides ); $i++ ) : ?>
                <button
                    class="hero-slideshow__dot<?php echo 0 === $i ? ' is-active' : ''; ?>"
                    aria-label="<?php echo esc_attr( sprintf( __( 'Slide %d', 'client-theme' ), $i + 1 ) ); ?>"
                ></button>
            <?php endfor; ?>
        </div>
    <?php endif; ?>
</section>
