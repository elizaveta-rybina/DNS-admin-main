"use strict";

export function mxHelper(response) {

	let wrapper = $('<div class="form-wrapper"></div>');

	response.forEach((row) => {
		wrapper.append(`
      <div class="form-body">
        <div class="type">
          <span>MX</span>
        </div>
        <div class="value">
          <p>Приоритет: ${row.priority}</p>
          <p>Значение: ${row.value}</p>
        </div>
        <div class="buttons">
          <button class="setting">
            <i class="fa-solid fa-pencil" style="color: #000000;"></i>
          </button>
          <form id="openDeleteModal">
						<input type="hidden" name="${row.id}" value="${row.id}">
						<button type="submit" class="btnDelete" data-toggle="modal" data-target="#deleteRecordForm">
              <i class="fa-solid fa-trash" style="color: #000000;"></i>
						</button>
					</form>
        </div>
      </div>
    `);
	});

	return wrapper;
}
