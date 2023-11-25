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
        <div class="buttons">
          <button class="setting">
            <i class="fa-solid fa-pencil" style="color: #000000;"></i>
          </button>
          <button class="delete">
            <i class="fa-solid fa-trash" style="color: #000000;"></i>
          </button>
        </div>
			</div>
		`);
	});

	return wrapper;
}
