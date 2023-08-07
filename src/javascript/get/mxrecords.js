"use strict";

$(document).ready(function () {
	let domainid = new URL(window.location.href).searchParams.get("domainid");

	$.ajax({
		type: 'GET',
		url: '../php/get/domainName.php',
		data: { id: new URL(window.location.href).searchParams.get("domainid") },
		success: function (domainName) {
			$.ajax({
				type: "GET",
				url: "../php/get/records.php",
				dataType: "html",
				data: { table: "mxrecord", domainid: domainid },
				success: function (response) {
					$.getScript("../javascript/frames/mxrecords.js", function () {
						$("#records").append(mxHelper(JSON.parse(response), JSON.parse(domainName).name));
					});
				},
			});
		}
	});
});