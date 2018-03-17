function initTabs() {
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a').click(function(e) {
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

$(document).ready(() => {
	$(window).trigger('resize');
	initTabs();
});

$(window).resize(() => {
	console.log('====================================');
	console.log('resize home.js');
	console.log('====================================');
});
