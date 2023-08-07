'use strict';

$(document).ready(function() {
	$('#exampleModalMXRecord').submit(function(event) {
		let domainid = new URL(window.location.href).searchParams.get("domainid");
		event.preventDefault();

		$.ajax({
			type: 'GET',
			url: '../php/get/domainName.php',
			data: { id: new URL(window.location.href).searchParams.get("domainid") },
			success: function (domainName) {
				var input = $('#MXRecordInput').val();
				var input_pr = $('#MXRecordInputPr').val();
				$.ajax({
					type: 'GET',
					url: '../php/add/mxrecord.php',
					data: { domainid: domainid, ip: input, priority: input_pr},
					success: function() {
						$.getScript("../javascript/frames/mxrecords.js", function () {
							$("#records").prepend(mxHelper([{priority: input_pr, ip: input}], JSON.parse(domainName).name));
						});
					}
				});
			}
		});
	});
});