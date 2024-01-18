'use strict';

import { cnameHelper } from "../frames/cnamerecords.js";

$(document).ready(function() {
	$('#exampleModalCNameRecord').submit(function(event) {
		let domainid = new URL(window.location.href).searchParams.get("domainid");
		event.preventDefault();

		$.ajax({
			type: 'GET',
			url: '../php/get/domainName.php',
			data: { id: new URL(window.location.href).searchParams.get("domainid") },
			success: function (domainName) {
				var input = $('#CNAMERecordInput').val();
				$.ajax({
					type: 'GET',
					url: '../php/add/cnamerecord.php',
					data: { domainid: domainid, text: input },
					success: function () {
						$.getScript("../javascript/frames/cnamerecords.js", function () {
							$('#records').prepend(cnameHelper([{text: input}], JSON.parse(domainName).name));
						});
					}
				});
			}
		});
	});
});
