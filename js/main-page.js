(function() {
	"use strict";

	//init main slider
	$(function () {
		$('.carousel').carousel({
			interval: 6000,
			pause: null
		});
	});

	//init owl carousel for main page block graduates
	$(function () {
		$(".graduates__carousel").owlCarousel({
			items : 1,
			dots  : false,
			nav   : true,
			navText : [
				"<i class='graduates__arrow--prev fa fa-chevron-left'  aria-hidden='true'></i>",
				"<i class='graduates__arrow--next fa fa-chevron-right' aria-hidden='true'></i>"
			]
		});
	});

	//init owl carousel for main page block educators
	$(function(){
        $(".educators__owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            dots: true,
		    responsive: {
		    	0   : { items: 1 },
		        500 : { items: 2 },
		        750 : { items: 3 },
		        1100: { items: 4 }
		    }
        });
    });

	$(function(){
		if ($(window).width() >= 1200) {
			new WOW().init();
		}
    });
})();