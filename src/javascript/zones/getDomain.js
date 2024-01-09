function getDomain(callback) {
	$.ajax({
		type: "GET",
		url: "../php/zones/get.php",
		dataType: "html",
		success: function (response) {
			callback(JSON.parse(response));
		},
	});
};

function domainHelper(responce) {
	var wrapper = $('<div class="form-wrapper"></div>');
	responce.forEach((domain) => {
		wrapper.append(`
			<div class="form-body">
				<p>${domain.name}</p>
				<div class="buttons">
          <form>
						<input type="hidden" name="domainname" value="${domain.name}">
						<button type="button" data-bs-toggle="modal" data-bs-target="#changeNameOfDomain">
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

$(document).ready(function() {
  $('#addFileZone').modal('hide');
	getDomain(
		function(response)
		{
			$('#domains').prepend(domainHelper(response));
	  }
  );
});
