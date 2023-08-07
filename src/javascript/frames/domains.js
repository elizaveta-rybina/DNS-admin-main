"use strict";

function domainHelper(responce) {
	let wrapper = $('<div class="form-wrapper"></div>');
	responce.forEach((domain) => {
		wrapper.append(`
			<div class="form-body">
				<p>${domain.name}</p>
				<div class="buttons">
					<button class="adding"><img src="image/add.png" /></button>
					<form action="pages/setting.php"><input type="hidden" name="domainid" value="${domain.id}"><button type="submit" class="dns"><img src="image/setting.png" /></button><form>
					<button class="delete"><img src="image/delete.png" /></button>
				</div>
			</div>
		`);
	});
	return wrapper;
}