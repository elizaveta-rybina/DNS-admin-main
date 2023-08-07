'use strict';

$(document).ready(function add() {
	$('#exampleModalDomen').submit(function(event) {
		event.preventDefault();
		
		var input = $('#domenInput').val();
		$.ajax({
			type: 'GET',
			url: '../php/add/domain.php',
			data: { domain_name: input },
			success: function () {
				$.getScript("../javascript/frames/domains.js", function () {
					$('#domains').prepend(domainHelper([{name: input}]));
				});
			}
		});
	});
});
