'use strict';

import { mxHelper } from "../frames/mxrecords.js";

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
        console.log(input);
				$.ajax({
					type: 'GET',
					url: '../php/add/mxrecord.php',
					data: { domainid: domainid, value: input, priority: input_pr},
					success: function() {
							$("#records").prepend(mxHelper([{priority: input_pr, value: input}], JSON.parse(domainName).name));
					}
				});
        location. reload();
			}
		});
	});
});
