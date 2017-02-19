(function() {
	"use strict";

    $(function() {
        $(".article__hide-block").hide(1);

        $(".article__more-button").on("click", function () {
            var hideBlock = $(this)
                                .closest(".article")
                                .find(".article__hide-block");
            
            $(hideBlock).toggle(500);
        });
    });
})();