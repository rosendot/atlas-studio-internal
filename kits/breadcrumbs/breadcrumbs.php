<?php
/**
 * Breadcrumbs Template Partial
 *
 * Usage: <?php get_template_part( 'breadcrumbs' ); ?>
 *
 * Generates a hierarchical breadcrumb trail with schema.org markup.
 * Place below the header, above the page title.
 */

$separator = get_theme_mod( 'breadcrumb_separator', '›' );

// Build breadcrumb items
$items = array();
$items[] = array( 'label' => __( 'Home', 'client-theme' ), 'url' => home_url( '/' ) );

if ( is_singular() ) {
	// Get post type archive if applicable
	$post_type = get_post_type();
	if ( $post_type && 'post' !== $post_type && 'page' !== $post_type ) {
		$archive_url  = get_post_type_archive_link( $post_type );
		$post_type_obj = get_post_type_object( $post_type );
		if ( $archive_url && $post_type_obj ) {
			$items[] = array( 'label' => $post_type_obj->labels->name, 'url' => $archive_url );
		}
	}

	// Parent pages for hierarchical types
	if ( is_page() ) {
		$ancestors = array_reverse( get_post_ancestors( get_the_ID() ) );
		foreach ( $ancestors as $ancestor_id ) {
			$items[] = array( 'label' => get_the_title( $ancestor_id ), 'url' => get_permalink( $ancestor_id ) );
		}
	}

	// Categories for posts
	if ( is_single() && 'post' === $post_type ) {
		$categories = get_the_category();
		if ( ! empty( $categories ) ) {
			$cat = $categories[0];
			$items[] = array( 'label' => $cat->name, 'url' => get_category_link( $cat->term_id ) );
		}
	}

	$items[] = array( 'label' => get_the_title(), 'url' => '' );

} elseif ( is_archive() ) {
	$items[] = array( 'label' => get_the_archive_title(), 'url' => '' );

} elseif ( is_search() ) {
	$items[] = array( 'label' => sprintf( __( 'Search: %s', 'client-theme' ), get_search_query() ), 'url' => '' );

} elseif ( is_404() ) {
	$items[] = array( 'label' => __( 'Page Not Found', 'client-theme' ), 'url' => '' );
}

if ( count( $items ) < 2 ) return; // Don't show breadcrumbs on homepage alone
?>

<nav class="breadcrumbs" aria-label="<?php esc_attr_e( 'Breadcrumb', 'client-theme' ); ?>">
	<ol class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">
		<?php foreach ( $items as $i => $item ) :
			$is_last = ( $i === count( $items ) - 1 );
		?>
			<li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
				<?php if ( ! $is_last && $item['url'] ) : ?>
					<a class="breadcrumbs__link" href="<?php echo esc_url( $item['url'] ); ?>" itemprop="item">
						<span itemprop="name"><?php echo esc_html( $item['label'] ); ?></span>
					</a>
					<meta itemprop="position" content="<?php echo esc_attr( $i + 1 ); ?>">
					<span class="breadcrumbs__separator" aria-hidden="true"><?php echo esc_html( $separator ); ?></span>
				<?php else : ?>
					<span class="breadcrumbs__current" itemprop="name"><?php echo esc_html( $item['label'] ); ?></span>
					<meta itemprop="position" content="<?php echo esc_attr( $i + 1 ); ?>">
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ol>
</nav>
