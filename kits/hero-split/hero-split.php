<?php
/**
 * Hero Split Template Partial
 *
 * Usage: <?php get_template_part( 'hero-split' ); ?>
 *
 * Add class "hero-split--right" to flip content to the right side.
 * Set the background image on .hero-split__image inline or via custom field.
 */
?>
<section class="hero-split">
    <div class="hero-split__content">
        <p class="hero-split__label"><?php echo esc_html__( 'Welcome to', 'client-theme' ); ?></p>
        <h1 class="hero-split__title"><?php bloginfo( 'name' ); ?></h1>
        <p class="hero-split__text"><?php bloginfo( 'description' ); ?></p>
        <div class="hero-split__buttons">
            <a href="/menu" class="btn btn--primary"><?php echo esc_html__( 'View Menu', 'client-theme' ); ?></a>
            <a href="/about" class="btn btn--outline"><?php echo esc_html__( 'Our Story', 'client-theme' ); ?></a>
        </div>
    </div>
    <div class="hero-split__image" style="background-image: url('<?php echo esc_url( get_theme_mod( 'hero_image', '' ) ); ?>');"></div>
</section>
