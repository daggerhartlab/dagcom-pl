(function($) {
	$(document).ready(function() {
		$(window).scroll( function(){
			$('.cta-block-animated').each( function(){
				var elemTop = $(this).offset().top + 300;
				var viewBottom = $(window).scrollTop() + $(window).height();
				if( elemTop < viewBottom ){
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

