(function($) {
	let $teaser_cards_list = $('.blog-teaser-cards-list');

	$(document).ready(function() {
		if ($teaser_cards_list.length) {
			if (!$teaser_cards_list.isInViewport()) {
				$teaser_cards_list.find('.card-wrapper').css('opacity',0);
			}
		}
	});

	$(window).scroll( function(){
		if ($teaser_cards_list.length) {
			if ($teaser_cards_list.isInViewport()) {
				$teaser_cards_list.find('.card-wrapper').each(function(index) {
					$(this).addClass('animate-' + index);
				});
			}
		}
	});
})(jQuery);
