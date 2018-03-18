function initTabs() {
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a.tabs-nav-item').click(function(e) {
		e.preventDefault();
		let $this = $(this),
			tabgroup = `#${$this.parents('.tabs').data('tabgroup')}`,
			others = $this
				.closest('li')
				.siblings()
				.children('a'),
			target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup)
			.children('div')
			.hide();
		$(target).show();
	});
}

$('.accordion').each(function() {
	const allPanels = $(this)
		.children('dd')
		.hide();
	$(this)
		.children('dd')
		.first()
		.slideDown('easeOutExpo');
	$(this)
		.children('dt')
		.children('a')
		.first()
		.addClass('active');

	$(this)
		.children('dt')
		.children('a')
		.click(function() {
			const current = $(this)
				.parent()
				.next('dd');
			$(this)
				.parent()
				.parent()
				.find('> dt > a')
				.removeClass('active');
			$(this).addClass('active');
			allPanels.not(current).slideUp('easeInExpo');
			$(this)
				.parent()
				.next()
				.slideDown('easeOutExpo');
			return false;
		});
});

$(document).ready(() => {
	$(window).trigger('resize');
	initTabs();
});

$(window).resize(() => {
	console.log('====================================');
	console.log('resize home.js');
	console.log('====================================');
});
