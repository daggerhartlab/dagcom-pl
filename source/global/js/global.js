$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top + 400;
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementTop < viewportBottom;
};
