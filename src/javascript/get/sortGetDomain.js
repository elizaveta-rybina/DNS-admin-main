"use strict";

export function getDataSort(callback) {
	$.ajax({
		type: "GET",
		url: "../php/sort/domains.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));
		}
	});
}

export function getDataSortDesc(callback) {
	$.ajax({
		type: "GET",
		url: "../php/sort/domainsDesc.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));
		}
	});
}
