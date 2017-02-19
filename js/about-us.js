(function() {
	"use strict";

	//init owl carousel for about-us page educators block 
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

	//init owl carousel for about-us page partners block 
    $(function(){
        $(".partners__owl-carousel").owlCarousel({
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
})();

function getDataForCustomSelects(step) {
    var data = "";
    var selects = $(step.find(".selected_list input"));

    $.each(selects, function (i, value) {
        var input = $($(value).find("input"));
        var name  = input.attr("name");
        var val   = input.val();

        if (name) {
            data += "&" + name + "=" + val;
        }
    });

    return data;
}