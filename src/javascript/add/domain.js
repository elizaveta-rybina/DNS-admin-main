'use strict';

$(document).ready(function() {
	$('#exampleModalDomain').submit(function(event) {
		event.preventDefault();
		
		var input = $('#domainInput').val();
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
