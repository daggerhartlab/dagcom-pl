(function($) {
	$(document).ready(function() {
		if (!($('.staff-list .card-wrapper').isInViewport())) {
			$('.staff-list .staff-card').css('opacity',0);
		}
	});
	$(window).scroll( function(){
		$('.staff-list').each( function(){
			if ($(this).isInViewport()) {
				$('.staff-list .staff-card').each(function(index) {
					$(this).addClass('animate-' + index);
				});
			}
		});
	});
})(jQuery);
