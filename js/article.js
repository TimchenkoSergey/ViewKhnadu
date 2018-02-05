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

    $(function() {
        $('#registrationSubmit').on('click', function (e) {
            e.preventDefault();

            var nameElem  = $('#registrationName');
            var emailElem = $('#registrationEmail');
            var name      = nameElem.val();
            var email     = emailElem.val();
            var id        = functions.getConferenceId(location.pathname);

            if (functions.isValidName(name) && functions.isValidEmail(email)) {
                var data = { 'name' : name, 'email' : email, 'conferenceId' : id };

                functions.sendAjax('POST', '/registration', data, function (response) {
                    functions.clearInputs([ nameElem, emailElem ]);
                    functions.showModal(response.header, response.message);
                });
            }
            else {
                functions.sendAjax('GET', '/error-message', {}, function (response) {
                    var message = functions.getErrorMessage(response, [ nameElem, emailElem ])[0];
                    functions.showModal(message.header, message.message);
                });
            }
        });
    });

    $(function() {
        $("[data-fancybox]").fancybox({
            buttons : [
                'slideShow',
                'fullScreen',
                'close'
            ],
        });
    });
})();