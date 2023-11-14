"use strict";

// $(document).ready(function () {
// 	$.ajax({
// 		type: "GET",
// 		url: "../php/get/domains.php",
// 		dataType: "html",
// 		success: function (response) {
// 			$.getScript("../javascript/frames/domains.js", function () {
// 				$('#domains').append(domainHelper(JSON.parse(response)));
// 			});
// 		},
// 	});
// });

export function getDomain(callback) {
	$.ajax({
		type: "GET",
		url: "../php/get/domains.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));	
		},
	});
};