"use strict";

export function a4Helper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
        <div class="type">
          <span>AAAA</span>
        </div>
        <div class="value">
          <p>IP: ${row.ip}</p>
        </div>
			</div>
		`);
	});

	return wrapper;
}
