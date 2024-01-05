"use strict";

export function getUsers(callback) {
	$.ajax({
		type: "GET",
		url: "../php/users/user.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));
		},
	});
};
