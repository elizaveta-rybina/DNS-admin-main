"use strict";

export function cnameHelper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
        <div class="type">
          <span>CNAME</span>
        </div>
        <div class="value">
          <p>Текст: ${row.text}</p>
        </div>
			</div>
		`);
	});

	return wrapper;
}
