"use strict";

export function txtHelper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
        <div class="type">
          <span>TXT</span>
        </div>
        <div class="value">
          <span>Текст: ${row.text}</span>
        </div>
			</div>
		`);
	});

	return wrapper;
}
