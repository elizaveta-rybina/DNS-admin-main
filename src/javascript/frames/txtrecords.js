"use strict";

export function txtHelper(responce, domainName) {

	let wrapper = $('<div class="form-wrapper"></div>');

	responce.forEach((row) => {
		wrapper.append(`
      <div class="form-body">
        <a href="http://${domainName}" target="_blank">${domainName}</a>
        <span>TXT</span>
        <span>${row.text}</span>
        <div class="buttons">
          <button class="setting">
            <img src="/image/pencil.png">
          </button>
          <button class="delete">
            <img src="/image/delete.png">
          </button>
        </div>
      </div>
    `);
	});

	return wrapper;
}
