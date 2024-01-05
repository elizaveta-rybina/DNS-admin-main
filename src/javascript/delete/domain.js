'use strict';

$(document).ready(function() {
	$('#domainDeleteModal').submit(function(event) {
		event.preventDefault();

		var input = $('#deleteDomain').val();
		$.ajax({
			type: 'GET',
			url: '../php/delete/domain.php',
			data: { domain_name: input },
			success: function () {
				$.getScript("../javascript/delete/domains.js", function () {
					$('#domains').remove(domainHelper([{name: input}]));
				});
			}
		});
	});
});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
