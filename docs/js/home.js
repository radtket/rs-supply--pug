function initTabs() {
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a.tabs-nav-item').click(function(e) {
		e.preventDefault();
		const $this = $(this);
		const tabgroup = `#${$this.parents('.tabs').data('tabgroup')}`;
		const others = $this
			.closest('li')
			.siblings()
			.children('a');
		const target = $this.attr('href');
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

function initTabsNav() {
	const $line = $('.tabs-nav-underline');
	const $navListItem = $('.nav-li');
	const $activeWidth = $('.active-nav').width();
	const $firstChild = $('.nav-li:first-child');
	const $defaultMarginLeft = parseInt(
		$('.nav-li:first-child')
			.next()
			.css('marginLeft')
			.replace(/\D/g, '')
	);
	const $defaultPaddingLeft = parseInt(
		$('.tabs-nav-wrapper > ul')
			.css('padding-left')
			.replace(/\D/g, '')
	);

	$line.width(`${$activeWidth}px`);

	$line.css('marginLeft', `${$defaultPaddingLeft}px`);

	$navListItem.click(function() {
		let $initWidth;
		let $marginLeftToSet;
		const $this = $(this);
		const $activeNav = $('.active-nav');
		const $currentWidth = $activeNav.width();
		const $currentOffset = $activeNav.position().left;
		const $currentIndex = $activeNav.index();
		$activeNav.removeClass('active-nav');
		$this.addClass('active-nav');
		if ($this.is($activeNav)) {
			return 0;
		}
		if ($this.index() > $currentIndex) {
			if ($activeNav.is($firstChild)) {
				$initWidth = $defaultMarginLeft + $this.width() + $this.position().left - $defaultPaddingLeft;
			} else {
				$initWidth = $this.position().left + $this.width() - $currentOffset;
			}
			$marginLeftToSet = `${$this.position().left + $defaultMarginLeft}px`;
			$line.width(`${$initWidth}px`);
			return setTimeout(() => {
				$line.css('marginLeft', $marginLeftToSet);
				return $line.width(`${$this.width()}px`);
			}, 175);
		}
		if ($this.is($firstChild)) {
			$initWidth = $currentOffset - $defaultPaddingLeft + $defaultMarginLeft + $currentWidth;
			$marginLeftToSet = $this.position().left;
		} else {
			$initWidth = $currentWidth + $currentOffset - $this.position().left;
			$marginLeftToSet = $this.position().left + $defaultMarginLeft;
		}
		$line.css('marginLeft', $marginLeftToSet);
		$line.width(`${$initWidth}px`);
		return setTimeout(() => $line.width(`${$this.width()}px`), 175);
	});
}

$(document).ready(() => {
	$(window).trigger('resize');
	initTabs();
	initTabsNav();
});
