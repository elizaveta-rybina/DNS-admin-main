"use strict";

function domainHelper(responce) {
	let wrapper = $('<div class="form-wrapper"></div>');
	responce.forEach((domain) => {
		wrapper.append(`
			<div class="form-body">
				<p>${domain.name}</p>
				<div class="buttons">
					<button class="adding"><img src="image/add.png" /></button>
					<form action="pages/setting.php">
						<input type="hidden" name="domainid" value="${domain.id}">
						<button type="submit">
							<img src="image/setting.png" />
						</button>
					</form>
					<form class="deleteDomain">
						<input type="hidden" name="domainid" value="${domain.id}">
						<button type="submit">
							<img src="image/delete.png" />
						</button>
					</form>
				</div>
			</div>
		`);
	});
	return wrapper;
}

// <a href="?del=<?=${domain.id}?>"></a>
//class="delete-domain-link" data-toggle="modal" data-target="#exampleDomainDelete"