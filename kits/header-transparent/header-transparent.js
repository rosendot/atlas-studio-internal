/**
 * Header Transparent — solid background on scroll + mobile hamburger toggle.
 */
(function () {
	'use strict';

	var header = document.querySelector( '.header-transparent' );
	if ( ! header ) return;

	// Transition to solid on scroll
	window.addEventListener( 'scroll', function () {
		header.classList.toggle( 'is-scrolled', window.scrollY > 50 );
	} );

	// Hamburger toggle
	var btn = header.querySelector( '.header-transparent__hamburger' );
	var nav = header.querySelector( '.header-transparent__nav' );
	if ( btn && nav ) {
		btn.addEventListener( 'click', function () {
			nav.classList.toggle( 'is-open' );
		} );
	}
})();
