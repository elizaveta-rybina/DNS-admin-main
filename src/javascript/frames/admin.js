"use strict";

export function domainHelper(responce) {

	var wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((domain) => {
		wrapper.append(`
			<div class="form-body">
				<p>${domain.name}</p>
				<div class="buttons">
          <form data-toggle="modal" data-target="#changeNameOfDomain">
						<input type="hidden" name="domainname" value="${domain.name}">
						<button type="submit">
              <i class="fa fa-pencil" style="color: #000000;"></i>
						</button>
					</form>
					<form action="setting.html">
						<input type="hidden" name="domainid" value="${domain.id}">
						<button type="submit">
              <i class="fa-solid fa-gear" style="color: #000000;"></i>
						</button>
					</form>
					<form data-toggle="modal" data-target="#domainDelete">
						<input type="hidden" name="domainid" value="${domain.id}">
						<button type="submit">
              <i class="fa-solid fa-trash" style="color: #000000;"></i>
						</button>
					</form>
				</div>
			</div>
		`);
	});

	return wrapper;
}