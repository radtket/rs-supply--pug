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

function initDocumentsDropDown() {
	$('.dropdown-button').click(function() {
		const $button = $(this);
		const $menu = $button.siblings('.sub-nav__menu');
		$menu.toggleClass('show-menu');
		$menu.children('li').click(function() {
			$menu.removeClass('show-menu');
			$button.html($(this).html());
		});
	});
}

$(document).ready(() => {
	$(window).trigger('resize');
	initMobileNav();
	initDocumentsDropDown();
});

$(window).resize(() => {
	console.log('====================================');
	console.log('resize site.js');
	console.log('====================================');
});
