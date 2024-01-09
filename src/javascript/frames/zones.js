"use strict";

export function domainHelperZones(responce) {

	var wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((domain) => {
		wrapper.append(`
			<div class="form-body">
				<p>${domain.name}</p>
				<div class="buttons">
          <form id="saveDomain">
						<input type="hidden" name="${domain.id}" value="${domain.name}">
						<button class="changeNameBtn" type="submit" data-toggle="modal" data-target="#changeNameOfDomain">
              <i class="fa fa-download" style="color: #000000;"></i>
						</button>
					</form>
					<form id="openDeleteModal">
						<input type="hidden" name="${domain.name}" value="${domain.id}">
						<button type="submit" class="btnDelete" data-toggle="modal" data-target="#deleteDomainForm">
              <i class="fa-solid fa-trash" style="color: #000000;"></i>
						</button>
					</form>
				</div>
			</div>
		`);
	});

	return wrapper;
}
