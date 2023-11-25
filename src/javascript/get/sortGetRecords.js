"use strict";

export function getDataSort(callback) {
	$.ajax({
		type: "GET",
		url: "../php/sort/records.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));
		}
	});
}

export function getDataSortDesc(callback) {
	$.ajax({
		type: "GET",
		url: "../php/sort/recordsDesc.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));
		}
	});
}
