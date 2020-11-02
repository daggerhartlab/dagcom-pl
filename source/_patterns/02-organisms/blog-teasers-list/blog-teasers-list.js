(function($) {
	$(document).ready(function() {
		$('.blog-teasers-list .card-wrapper').each(function() {
			$(this).css('opacity', 0);
		})
		$(window).scroll( function(){
			$('.blog-teasers-list').each( function(){
				var elemTop = $(this).offset().top + 300;
				var viewBottom = $(window).scrollTop() + $(window).height();
				if (elemTop < viewBottom) {
					$('.blog-teasers-list .card-wrapper').each(function(index) {
						$(this).addClass('animate-' + index);
					});
				}
			});
		});
	});
})(jQuery);
