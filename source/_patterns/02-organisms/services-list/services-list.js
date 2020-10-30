(function($) {
	$(document).ready(function() {
		$('.service-card').each(function() {
			$(this).css('opacity', 0);
		})
		$(window).scroll( function(){
			$('.services-list').each( function(){
				var elemTop = $(this).offset().top + 300;
				var viewBottom = $(window).scrollTop() + $(window).height();
				if (elemTop < viewBottom) {
					console.log(elemTop);
					console.log(viewBottom);
					console.log('onscreen')
					$('.service-card').each(function(index) {
						$(this).addClass('animate-' + index);
					});
				}
			});
		});
	});
})(jQuery);
