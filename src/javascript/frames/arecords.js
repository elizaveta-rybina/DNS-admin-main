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
        <div class="buttons">
          <button class="setting">
            <i class="fa-solid fa-pencil" style="color: #000000;"></i>
          </button>
          <form id="openDeleteModal">
						<input type="hidden" name="${row.id}" value="${row.id}">
						<button type="submit" class="btnDelete" data-toggle="modal" data-target="#deleteRecordFormA">
              <i class="fa-solid fa-trash" style="color: #000000;"></i>
						</button>
					</form>
        </div>
			</div>
		`);
	});

	return wrapper;
}

//changeValueARecord
