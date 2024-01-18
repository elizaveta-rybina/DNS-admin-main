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
