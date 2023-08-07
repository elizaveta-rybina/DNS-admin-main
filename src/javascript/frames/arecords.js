"use strict";

function aHelper(responce, domainName) {
	let wrapper = $('<div class="form-wrapper"></div>');
	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
				<a href="http://${domainName}" target="_blank">${domainName}</a>
				<span>A</span>
				<span>${row.ip}</span>
				<div class="buttons">
				<button class="setting"><img src="/image/pencil.png"></button>
				<button class="delete"><img src="/image/delete.png"></button>
				</div>
			</div>
		`);
	});
	console.dir(wrapper);
	return wrapper;
}