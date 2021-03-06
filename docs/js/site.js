function initMobileNav() {
	const menuToggle = $('#js-mobile-menu').unbind();
	$('#js-navigation-menu').removeClass('show');

	menuToggle.on('click', e => {
		e.preventDefault();
		$('#js-navigation-menu').slideToggle(() => {
			if ($('#js-navigation-menu').is(':hidden')) {
				$('#js-navigation-menu').removeAttr('style');
			}
		});
	});
}

function navbarBodyOffset() {
	const navbar = $('.navigation').height();
	$('body').css('padding-top', `${navbar}px`);
}

function initDocumentsDropDown() {
	$('.dropdown-button').click(function() {
		// const $button = $(this);
		const $menu = $(this).siblings('.sub-nav__menu');
		$menu.slideToggle();
	});
}

$(document).ready(() => {
	$(window).trigger('resize');
	initMobileNav();
	initDocumentsDropDown();
	navbarBodyOffset();
});

$(window).resize(() => {
	navbarBodyOffset();
});
