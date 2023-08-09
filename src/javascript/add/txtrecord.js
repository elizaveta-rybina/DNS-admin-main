'use strict';

$(document).ready(function() {
	$('#exampleModalTXTRecord').submit(function(event) {
		let domainid = new URL(window.location.href).searchParams.get("domainid");
		event.preventDefault();
		
		$.ajax({
			type: 'GET',
			url: '../php/get/domainName.php',
			data: { id: new URL(window.location.href).searchParams.get("domainid") },
			success: function (domainName) {
				var input = $('#TXTRecordInput').val();
				$.ajax({
					type: 'GET',
					url: '../php/add/txtrecord.php',
					data: { domainid: domainid, ip: input },
					success: function () {
						$.getScript("../javascript/frames/txtrecords.js", function () {
							$('#records').prepend(aHelper([{ip: input}], JSON.parse(domainName).name));
						});
					}
				});
			}
		});
	});
});