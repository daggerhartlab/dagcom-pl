(function($) {
	let $services_list = $('.services-list');

	$(document).ready(function() {
		if ($services_list.length && !$services_list.isInViewport()) {
			$services_list.find('.service-card').css('opacity',0);
		}
	});

	$(window).scroll( function(){
		if ($services_list.length && $services_list.isInViewport()) {
			$services_list.find('.service-card').each(function(index) {
				$(this).addClass('animate-' + index);
			});
		}
	});
})(jQuery);
