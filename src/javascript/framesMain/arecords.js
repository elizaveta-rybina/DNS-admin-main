"use strict";

export function aHelper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
        <div class="type">
          <span>A</span>
        </div>
        <div class="value">
          <p>IP: ${row.ip}</p>
        </div>
			</div>
		`);
	});

	return wrapper;
}

//changeValueARecord
