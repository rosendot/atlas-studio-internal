/**
 * Testimonial Slider — auto-rotating single-testimonial carousel.
 */
(function () {
	'use strict';

	document.querySelectorAll( '.testimonial-slider' ).forEach( function ( slider ) {
		var slides  = slider.querySelectorAll( '.testimonial-slider__slide' );
		var dots    = slider.querySelectorAll( '.testimonial-slider__dot' );
		var current = 0;
		var interval = parseInt( slider.dataset.interval, 10 ) || 6000;
		var timer;

		if ( slides.length < 2 ) return;

		function goTo( index ) {
			slides[ current ].classList.remove( 'is-active' );
			if ( dots[ current ] ) dots[ current ].classList.remove( 'is-active' );
			current = index % slides.length;
			slides[ current ].classList.add( 'is-active' );
			if ( dots[ current ] ) dots[ current ].classList.add( 'is-active' );
		}

		dots.forEach( function ( dot, i ) {
			dot.addEventListener( 'click', function () {
				clearInterval( timer );
				goTo( i );
				timer = setInterval( function () { goTo( current + 1 ); }, interval );
			} );
		} );

		timer = setInterval( function () { goTo( current + 1 ); }, interval );
	} );
})();
