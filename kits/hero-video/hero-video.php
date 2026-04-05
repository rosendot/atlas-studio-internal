<?php
/**
 * Hero Video Template Partial
 *
 * Usage: <?php get_template_part( 'hero-video' ); ?>
 *
 * Set the video URL via a custom field or hardcode the src below.
 * Include a poster attribute for the fallback image before the video loads.
 */
?>
<section class="hero-video">
    <video
        class="hero-video__bg"
        autoplay
        muted
        loop
        playsinline
        poster="<?php echo esc_url( get_theme_mod( 'hero_poster', '' ) ); ?>"
    >
        <source src="<?php echo esc_url( get_theme_mod( 'hero_video_url', '' ) ); ?>" type="video/mp4">
    </video>
    <div class="hero-video__overlay"></div>
    <div class="hero-video__content">
        <p class="hero-video__label"><?php echo esc_html__( 'Welcome to', 'client-theme' ); ?></p>
        <h1 class="hero-video__title"><?php bloginfo( 'name' ); ?></h1>
        <p class="hero-video__text"><?php bloginfo( 'description' ); ?></p>
        <div class="hero-video__buttons">
            <a href="/menu" class="btn btn--primary"><?php echo esc_html__( 'View Menu', 'client-theme' ); ?></a>
            <a href="/about" class="btn btn--outline"><?php echo esc_html__( 'Our Story', 'client-theme' ); ?></a>
        </div>
    </div>
</section>
