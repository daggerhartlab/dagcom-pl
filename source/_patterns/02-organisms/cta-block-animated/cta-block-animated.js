(function($) {
	function animateRow() {
		$('.cta-block-animated').each( function() {
			if ($(this).isInViewport()) {
				var targetLeft = $(this).find('.animate-left');
				var targetRight = $(this).find('.animate-right');
				$(targetLeft).animate({
					opacity: 1,
					marginLeft: 0,
					marginRight: 0,
				});
				$(targetRight).animate({
					opacity: 1,
					marginLeft: 0,
					marginRight: 0,
				});
			}
		});
	}
	$(document).ready(function() {
		animateRow();
	});
	$(window).scroll( function(){
		animateRow();
	});
})(jQuery);
