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
