"use strict";

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
