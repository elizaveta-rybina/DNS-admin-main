"use strict";

function mxHelper(responce, domainName) {
	let wrapper = $('<div class="form-wrapper"></div>');
	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
				<a href="http://${domainName}" target="_blank">${domainName}</a>
				<span>MX</span>
				<span>${row.priority}: ${row.ip}</span>
				<div class="buttons">
				<button class="setting"><img src="/image/pencil.png"></button>
				<button class="delete"><img src="/image/delete.png"></button>
				</div>
			</div>
		`);
	});

	return wrapper;
}