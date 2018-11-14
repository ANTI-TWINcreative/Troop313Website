var distance = $('.nav').offset().top;

$(window).scroll(function() {
	if ( $(this).scrollTop() >= distance ) {
			$('nav').addClass('fixed');
	} else {
			$('nav').removeClass('fixed');
	}
});
