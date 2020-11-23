(function($) {
	$(document).ready(function() {
		$('.staff-card').each(function() {
			$(this).css('opacity', 0);
		})
		$(window).scroll( function(){
			$('.staff-list').each( function(){
				var elemTop = $(this).offset().top + 300;
				var viewBottom = $(window).scrollTop() + $(window).height();
				if (elemTop < viewBottom) {
					$('.staff-card').each(function(index) {
						$(this).addClass('animate-0');
					});
				}
			});
		});
	});
})(jQuery);
