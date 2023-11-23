'use strict';

$(document).ready(function() {
	$('#exampleModalARecord').submit(function(event) {
		let domainid = new URL(window.location.href).searchParams.get("domainid");
		event.preventDefault();

		$.ajax({
			type: 'GET',
			url: '../php/get/domainName.php',
			data: { id: new URL(window.location.href).searchParams.get("domainid") },
			success: function (domainName) {
				var input = $('#ARecordInput').val();
				$.ajax({
					type: 'GET',
					url: '../php/add/arecord.php',
					data: { domainid: domainid, ip: input },
					success: function () {
						$.getScript("../javascript/frames/arecords.js", function () {
							$('#records').prepend(aHelper([{ip: input}], JSON.parse(domainName).name));
						});
					}
				});
			}
		});
	});
});
