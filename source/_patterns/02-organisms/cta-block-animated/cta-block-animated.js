(function($) {
	$(document).ready(function() {
		$(window).scroll( function(){
			$('.cta-block-animated').each( function(){
				var bottom_of_element = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_element ){
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
		});
	});
})(jQuery);

