"use strict";

export function zoneErrorHelper(responce) {

	let wrapper = $('<div class="error-text"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="error-body">
        <div class="value">
          <p>${row}</p>
        </div>
			</div>
		`);
	});

	return wrapper;
}

