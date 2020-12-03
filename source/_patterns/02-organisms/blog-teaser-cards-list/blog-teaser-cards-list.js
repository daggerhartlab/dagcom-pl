(function($) {
	$(document).ready(function() {
		if (!($('.blog-teaser-cards-list').isInViewport())) {
			$('.blog-teaser-cards-list .card-wrapper').css('opacity',0);
		}
	});
	$(window).scroll( function(){
		$('.blog-teaser-cards-list').each( function(){
			if ($(this).isInViewport()) {
				$('.blog-teaser-cards-list .card-wrapper').each(function(index) {
					$(this).addClass('animate-' + index);
				});
			}
		});
	});
})(jQuery);
