(function() {
	"use strict";

    //init owl carousel for article page article-owl-carousel block 
	$(function(){
        $(".article-owl-carousel").owlCarousel({
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

    //init swipe box for gallery
    $(function() {
        $(".swipebox").swipebox();
    });
})();