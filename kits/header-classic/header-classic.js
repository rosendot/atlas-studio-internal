/**
 * Header Classic — sticky shadow on scroll + mobile hamburger toggle.
 */
(function () {
	'use strict';

	var header = document.querySelector( '.header-classic' );
	if ( ! header ) return;

	// Sticky shadow on scroll
	window.addEventListener( 'scroll', function () {
		header.classList.toggle( 'is-scrolled', window.scrollY > 10 );
	} );

	// Hamburger toggle
	var btn = header.querySelector( '.header-classic__hamburger' );
	var nav = header.querySelector( '.header-classic__nav' );
	if ( btn && nav ) {
		btn.addEventListener( 'click', function () {
			nav.classList.toggle( 'is-open' );
		} );
	}
})();
