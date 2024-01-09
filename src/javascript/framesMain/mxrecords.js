"use strict";

export function mxHelper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
      <div class="form-body">
        <div class="type">
          <span>MX</span>
        </div>
        <div class="value">
          <p>Приоритет: ${row.priority}</p>
          <p>Значение: ${row.value}</p>
        </div>
      </div>
    `);
	});

	return wrapper;
}
