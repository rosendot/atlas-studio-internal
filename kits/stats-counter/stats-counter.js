/**
 * Stats Counter — animate numbers counting up when section scrolls into view.
 */
(function () {
	'use strict';

	var items = document.querySelectorAll( '.stats-counter__number[data-target]' );
	if ( ! items.length ) return;

	var animated = false;

	function animateCounters() {
		items.forEach( function ( el ) {
			var target  = parseFloat( el.dataset.target ) || 0;
			var suffix  = el.dataset.suffix || '';
			var duration = 2000;
			var start   = 0;
			var startTime = null;

			function step( timestamp ) {
				if ( ! startTime ) startTime = timestamp;
				var progress = Math.min( ( timestamp - startTime ) / duration, 1 );
				// Ease-out quad
				var eased = 1 - ( 1 - progress ) * ( 1 - progress );
				var current = Math.floor( eased * target );
				el.textContent = current.toLocaleString() + suffix;
				if ( progress < 1 ) {
					requestAnimationFrame( step );
				} else {
					el.textContent = target.toLocaleString() + suffix;
				}
			}

			requestAnimationFrame( step );
		} );
	}

	var observer = new IntersectionObserver( function ( entries ) {
		entries.forEach( function ( entry ) {
			if ( entry.isIntersecting && ! animated ) {
				animated = true;
				animateCounters();
				observer.disconnect();
			}
		} );
	}, { threshold: 0.3 } );

	var section = document.querySelector( '.stats-counter' );
	if ( section ) observer.observe( section );
})();
