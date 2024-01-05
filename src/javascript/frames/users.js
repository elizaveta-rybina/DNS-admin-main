"use strict";

export function usersHelper(responce) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
			<div class="form-body">
        <div class="name">
          <span>${row.name}</span>
        </div>
        <div class="lastName">
          <span>${row.lastName}</span>
        </div>
        <div class="FatherName">
          <span>${row.FatherName}</span>
        </div>
        <div class="email">
          <span>${row.email}</span>
        </div>
        <div class="login">
          <span>${row.login}</span>
        </div>
			</div>
		`);
	});

	return wrapper;
}
