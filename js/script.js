$(document).ready(function() {
	$(".burger-menu").click(function () {
	   			$(this).toggleClass("menu-on");
	});

	$(window).resize(function() {
		if($(window).width() > 751) {
			$('.header__menu').css('display','block');
		} else {
			$('.header__menu').css('display','none');
		}

		$('.burger-menu').removeClass('menu-on');
	});


	$('.burger-menu').click(function() {
		if($(this).hasClass('menu-on')) {
			$('.header__menu').css('display','block');
		} else {
			$('.header__menu').css('display','none');
		}
		
	});


	$('.header__menu li a').click(function(event) {
		if($('.burger-menu').hasClass('menu-on')) {
			$('.header__menu').css('display','none');
			$('.burger-menu').removeClass('menu-on');
		}
	});
});