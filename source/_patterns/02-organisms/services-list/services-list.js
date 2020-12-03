(function($) {
	$(document).ready(function() {
		if (!($('.services-list .card-wrapper').isInViewport())) {
			$('.services-list .service-card').css('opacity',0);
		}
	});
	$(window).scroll( function(){
		$('.services-list').each( function(){
			if ($(this).isInViewport()) {
				$('.services-list .service-card').each(function(index) {
					$(this).addClass('animate-' + index);
				});
			}
		});
	});
})(jQuery);
