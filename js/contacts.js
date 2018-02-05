(function() {
	"use strict";

	$(function () {
		$('#contactsSubmit').on('click', function (e) {
			e.preventDefault();

			var nameElem     = $('#contactsName');
			var emailElem    = $('#contactsEmail');
			var questionElem = $('#contactsQuestion');
			var name         = nameElem.val();
			var email        = emailElem.val();
			var question     = questionElem.val();

			if (functions.isValidName(name) && 
				functions.isValidEmail(email) && 
				functions.isValidQuestion(question)) {
				
				var data = { 'name' : name, 'email' : email, 'question' : question };

				functions.sendAjax('POST', '/question', data, function (response) {
					functions.clearInputs([ nameElem, emailElem, questionElem ]);
					functions.showModal(response.header, response.message);
				});
			}
			else {
				functions.sendAjax('GET', '/error-message', {}, function (response) {
					var message = functions.getErrorMessage(response, [ nameElem, emailElem, questionElem ])[0];
					functions.showModal(message.header, message.message);
				});
			}
		});
	});
})();