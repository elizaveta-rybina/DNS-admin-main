"use strict";

export function srvHelper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
        <div class="type">
          <span>SRV</span>
        </div>
        <div class="value">
          <p>Имя: ${row.name}</p>
          <p>Приоритет: ${row.priority}</p>
          <p>Вес: ${row.weight}</p>
          <p>Порт: ${row.port}</p>
          <p>Хост: ${row.host}</p>
          <p>Время жизни: ${row.TTL}</p>
        </div>
			</div>
		`);
	});

	return wrapper;
}
