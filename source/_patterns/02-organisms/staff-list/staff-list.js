(function($) {
	let $staff_list = $('.staff-list');
	$(document).ready(function() {
		if ($staff_list.length && !$staff_list.isInViewport()) {
			$staff_list.find('.staff-card').css('opacity',0);
		}
	});

	$(window).scroll( function(){
		if ($staff_list.length && $staff_list.isInViewport()) {
			$staff_list.find('.staff-card').each(function(index) {
				$(this).addClass('animate-' + index);
			});
		}
	});
})(jQuery);
