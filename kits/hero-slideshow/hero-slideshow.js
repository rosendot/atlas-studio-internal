/**
 * Hero Slideshow — auto-rotating background images with crossfade.
 *
 * Usage: Include after hero-slideshow.css. The script auto-initializes
 * on any .hero-slideshow element.
 */
(function () {
	'use strict';

	document.querySelectorAll( '.hero-slideshow' ).forEach( function ( hero ) {
		var slides = hero.querySelectorAll( '.hero-slideshow__slide' );
		var dots   = hero.querySelectorAll( '.hero-slideshow__dot' );
		var current = 0;
		var interval = parseInt( hero.dataset.interval, 10 ) || 5000;
		var timer;

		if ( slides.length < 2 ) return;

		function goTo( index ) {
			slides[ current ].classList.remove( 'is-active' );
			if ( dots[ current ] ) dots[ current ].classList.remove( 'is-active' );
			current = index % slides.length;
			slides[ current ].classList.add( 'is-active' );
			if ( dots[ current ] ) dots[ current ].classList.add( 'is-active' );
		}

		function next() {
			goTo( current + 1 );
		}

		// Dot click handlers
		dots.forEach( function ( dot, i ) {
			dot.addEventListener( 'click', function () {
				clearInterval( timer );
				goTo( i );
				timer = setInterval( next, interval );
			} );
		} );

		// Start auto-rotation
		timer = setInterval( next, interval );
	} );
})();
