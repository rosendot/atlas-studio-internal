/**
 * Mobile Nav Drawer — open/close off-canvas navigation.
 */
(function () {
	'use strict';

	var drawer   = document.querySelector( '.mobile-nav-drawer' );
	var backdrop = document.querySelector( '.mobile-nav-drawer__backdrop' );
	if ( ! drawer || ! backdrop ) return;

	var openBtns  = document.querySelectorAll( '[data-drawer-open]' );
	var closeBtn  = drawer.querySelector( '.mobile-nav-drawer__close' );

	function open() {
		drawer.classList.add( 'is-open' );
		backdrop.classList.add( 'is-open' );
		document.body.style.overflow = 'hidden';
	}

	function close() {
		drawer.classList.remove( 'is-open' );
		backdrop.classList.remove( 'is-open' );
		document.body.style.overflow = '';
	}

	openBtns.forEach( function ( btn ) {
		btn.addEventListener( 'click', open );
	} );

	if ( closeBtn ) closeBtn.addEventListener( 'click', close );
	backdrop.addEventListener( 'click', close );

	document.addEventListener( 'keydown', function ( e ) {
		if ( e.key === 'Escape' && drawer.classList.contains( 'is-open' ) ) close();
	} );
})();
